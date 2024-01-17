import express, { Response, Request} from "express";
import { check, validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user-models";
import verifyToken from "../middleware/auth-middleware";

const router = express.Router();

router.post("/login", [
    check("email", "Email is requred").isEmail(),
    check("password", "Password minimun 6 character").isLength({
        min: 6
    })
], async (req: Request, resp: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return resp.status(400).json({message: error.array()})
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({email})
        if(!user) {
            return resp.status(400).json({ message: "Email or Password not found"})
        }
        let isMatch = bcryptjs.compare(password, user.password);
        if(!isMatch) {
            return resp.status(400).json({message: "Email or Password not found"})
        }

        const token = jwt.sign({ 
            userId: user.id},
            process.env.JWT_SECRET_KEY as string, {
                expiresIn: "1d"
            }
        )

        resp.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        })

        return resp.status(200).json({message: "Login succes"})

    } catch (error) {
        console.log(error)
        return resp.status(500).json({message: "Error"})
    }

})

router.get('/verify-token', verifyToken, (req: Request, res: Response) => {
    res.status(200).json({userId: req.userId})
})

router.post('/logout', (req: Request, res: Response) => {
    res.cookie("auth_token", "", {
        expires: new Date(0)
    })
    res.send()
})

export default router