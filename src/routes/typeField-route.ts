import express, { Request, Response } from "express"
import verifyToken from "../middleware/auth-middleware"
import { body, validationResult } from "express-validator"
import typeField, { field } from "../models/field-model"

const router = express.Router()

router.post("/",[
    body("fieldProfileId").optional(),
    body("nameField").notEmpty().withMessage("name required"),
    body("typeField").notEmpty().withMessage("typeField required"),
    body("pricePerHours").notEmpty().isNumeric().withMessage("numberOfFields required"),
],
    verifyToken, async (req:Request, res: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({message: error.array()})
    }
    try {
        const fieldData: field = req.body

        fieldData.fieldProfileId = req.userId
        const fieldAdd = new typeField(fieldData)
        await fieldAdd.save()
        res.status(200).json(fieldAdd)
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.patch("/:id",[
    body("fieldProfileId").optional(),
    body("nameField").optional(),
    body("typeField").optional(),
    body("pricePerHours").optional().isNumeric().withMessage("numberOfFields is number"),
],
    verifyToken, async (req:Request, res: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({message: error.array()})
    }
    try {
        const { id } = req.params;
        const fieldData: field = req.body

        const fieldAdd = await typeField.findOneAndUpdate(
            {
                _id: id
            },
            fieldData,
            { new: true}
        )
        res.status(200).json(fieldAdd)
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.get("/", verifyToken, async (req: Request, res: Response) => {
    try {
        const data = await typeField.find({ fieldProfileId: req.userId })
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await typeField.findOne({_id: id})
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const deleteData = await typeField.findOneAndDelete({_id: id});
    
        if (!deleteData) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json({message: "Hapus data berhasil"})
    } catch (error) {
        console.log(error)
        res.status(500).json("Something is wrong")
    }
})

export default router