import express, {Request, Response} from "express";
import fieldProfile from "../models/mycourt-models";
import field from "../models/mycourt-models";
import typeField from "../models/field-model";

const router = express.Router()

router.get("/", async (req:Request, res:Response) => {
    try {
        const dataField = await fieldProfile.aggregate([
            {
                $lookup: {
                    from: "typefields",
                    localField: 'userId',
                    foreignField: 'fieldProfileId',
                    as: 'dataField'
                }
            },
            {
                $unwind: '$dataField' // Unwind the array
            },
            {
                $group: {
                    _id: '$_id', // Group by the original document's _id
                    name: { $first: '$name' },
                    city: { $first: '$city' },
                    imageUrl: { $first: '$imageUrl' },
                    description: { $first: '$description' },
                    typeFields: { $addToSet: '$dataField.typeField' }, // Use $addToSet to get unique typeField values
                    minPricePerHours: { $min: '$dataField.pricePerHours' }, // Minimum pricePerHours
                    maxPricePerHours: { $max: '$dataField.pricePerHours' }  // Maximum pricePerHours
                }
            },
            {
                $project: {
                    _id:  1,
                    name: 1,
                    city: 1,
                    imageUrl: 1,
                    description: 1,
                    typeFields: 1,
                    pricePerHours: {
                            $concat: [
                            'Rp.',
                            { $toString: '$minPricePerHours' },
                            ' - ',
                            'Rp.',
                            { $toString: '$maxPricePerHours' }
                            ]
                        }
                    }
            }
        ]);
        res.status(200).json(dataField);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something wrong")
    }
})

router.get("/search", async (req:Request, resp:Response) => {
    try {
        const { name, kota, minHarga, maxHarga, tipeLapangan, facility, lokasi } = req.query;
        const query: any = {};
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (lokasi) {
            query.addres = { $regex: lokasi, $options: "i" };
        }
        if (kota) {
            query.city = { $regex: kota, $options: "i" };
        }
        if (facility) {
            query.facility = { $regex: facility, $options: "i" };
        }
        if (tipeLapangan) {
            query.typeField = { $regex: tipeLapangan, $options: "i" };
        }

        // Find documents matching the query
        const searchResults = await fieldProfile.find(query);
        resp.status(200).json(searchResults)
    } catch (error) {
        return resp.status(500).json("Something Wrong")
    }
})

export default router