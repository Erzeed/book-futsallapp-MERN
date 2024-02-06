import express, {Request, Response} from "express";
import field, { CourtProfile } from "../models/mycourt-models";
import { body, validationResult } from "express-validator";
import verifyToken from "../middleware/auth-middleware";
import multer from "multer";
import cloudinary from "cloudinary";

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 5MB
  },
});
//nanti cek
router.post("/", [
    body("name").notEmpty().withMessage("Name required"),
    body("addres").notEmpty().withMessage("Addres required"),
    body("city").notEmpty().withMessage("City required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("typeField").notEmpty().isArray().withMessage("type field required"),
    body("openingHours").notEmpty().withMessage("openingHours required"),
    body("closingTime").notEmpty().withMessage("closingTime required"),
    body("facility").notEmpty().isArray().withMessage("facility required"),
],verifyToken, upload.array("imageFile",6), async (req: Request, res: Response) => {
    try {
        const imageFile = req.files as Express.Multer.File[];
        const addCourt: CourtProfile = req.body;

        const imageUrls = await uploadImages(imageFile);

        addCourt.imageUrl = imageUrls
        addCourt.userId = req.userId

        const { userId } = addCourt
        const saveField = await field.findOneAndUpdate(
            { userId },
            { $set: addCourt }, /*, ... other fields to update */
            { upsert: true, new: true } // Upsert option for update or insert, new option to return the modified document
          );

        res.status(200).json(saveField);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
      const profile = await field.findOne({ userId: req.userId })
      res.status(200).json(profile);
  } catch (error) {
      console.log(error)
      return res.status(500).json("Something wrong")
  }
})

async function uploadImages(imageFile: Express.Multer.File[]) {
    const uploadPromises = imageFile.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    });
  
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
  }

export default router;