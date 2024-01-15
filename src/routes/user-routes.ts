import express, { Request, Response} from "express";
import jwt from "jsonwebtoken";
import User from "../models/user-models";

const router = express.Router();

router.post("/register", async (req: Request, resp: Response) => {
    try {
        let user = await User.findOne({
            email: req.body.email
        })
        if(user) {
            return resp.status(400).json({message: "Email Sudah Terdaftar"})
        }
        user = new User(req.body);
        user.save();
        
        const token = jwt.sign({
            userId: user.id},
            process.env.JWT_SECRET_KEY as string, {
                expiresIn: "1D"
            }
        )
        resp.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        })
        return resp.status(200).json({message: "Register Berhasil"})
    } catch (error) {
        console.log(error);
        return resp.status(500).json({message: "Error"})
    }
})

export default router;