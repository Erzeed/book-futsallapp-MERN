import express, { Response, Request } from "express"
import verifyToken from "../middleware/auth-middleware"
import { body, validationResult } from "express-validator"
import typeField, { field } from "../models/field-model"

const router = express.Router()

router.post("/",[
    body("fieldProfileId").notEmpty().withMessage("Id required"),
    body("typeField").notEmpty().withMessage("typeField required"),
    body("numberOfFields").notEmpty().isNumeric().withMessage("numberOfFields required"),
],
    verifyToken, async (req:Request, res: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({message: error.array()})
    }
    try {
        const fieldData: field = req.body

        const fieldAdd = new typeField(fieldData)
        await fieldAdd.save()
        res.status(200).json(fieldAdd)
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

export default router