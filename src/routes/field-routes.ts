import express, {Request, Response} from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import field, { CourtProfile } from "../models/mycourt-models";
import { body } from "express-validator";

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
//nanti cek
router.post("/", [
    body("name").notEmpty().withMessage("Name required"),
    body("addres").notEmpty().withMessage("Addres required"),
    body("city").notEmpty().withMessage("City required"),
    body("mapAddres").notEmpty().isArray().withMessage("mapAddres required"),
    body("numberField").notEmpty().isNumeric().withMessage("numberField required"),
    body("facility").notEmpty().isArray().withMessage("facility required"),
    body("imageUrl").notEmpty().withMessage("imageUrl required"),
], upload.array("uploudFile"), async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newField: CourtProfile = req.body;
        //nanti uji coba
        // const imageUrls = await uploadImages(imageFiles);
        // newField.imageUrl = imageUrls;
        newField.userId = req.userId;

        const saveField = new field(newField);
        await saveField.save()

        res.status(200).json(saveField);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

// async function uploadImages(imageFiles: Express.Multer.File[]) {
//     const uploadPromises = imageFiles.map(async (image) => {
//       const b64 = Buffer.from(image.buffer).toString("base64");
//       let dataURI = "data:" + image.mimetype + ";base64," + b64;
//       const res = await cloudinary.v2.uploader.upload(dataURI);
//       return res.url;
//     });
  
//     const imageUrls = await Promise.all(uploadPromises);
//     return imageUrls;
//   }

export default router;