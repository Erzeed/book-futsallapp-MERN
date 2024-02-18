import express, {Request, Response} from "express";
import fieldProfile from "../models/mycourt-models";

const router = express.Router()

router.get("/search", async (req:Request, resp:Response) => {
    try {

        const pageSize =  parseInt(
            req.query.page ? req.query.page.toString() : "1"
        );;
        const query: any = searchQuery(req.query);
        // const pageNumber = parseInt(
        // req.query.page ? req.query.page.toString() : "1"
        // );
        // const skip = (pageNumber - 1) * pageSize;
        const dataField = await fieldProfile.aggregate([
            {
                $lookup: {
                    from: "typefields",
                    localField: 'userId',
                    foreignField: 'fieldProfileId',
                    as: 'dataField'
                }
            },
            {   $unwind: '$dataField' },
            {   $unwind: '$facility' },
            {
                $group: {
                    _id: '$_id', // Group by the original document's _id
                    name: { $first: '$name' },
                    city: { $first: '$city' },
                    imageUrl: { $first: '$imageUrl' },
                    description: { $first: '$description' },
                    typeFields: { $addToSet: '$dataField.typeField' }, // Use $addToSet to get unique typeField values
                    facility: { $addToSet: '$facility' }, // Use $addToSet to get unique typeField values
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
                    facility: 1,
                    minPricePerHours: 1,
                    maxPricePerHours:1
                    }
            },
            {   $match: query },
            {   $limit: pageSize }
        ]);
        resp.status(200).json(dataField)
    } catch (error) {
        return resp.status(500).json("Something Wrong")
    }
})

const searchQuery = (query: any) => {
    let constructQuery: any = {}
    if (query.name) {
        constructQuery.name = { $regex: query.name, $options: "i" };
    }
    if (query.kota) {
        constructQuery.city = { $regex: query.kota, $options: "i" };
    }
    if (query.tipeLapangan) {
        constructQuery.typeFields = { $regex: query.tipeLapangan, $options: "i"};
    }
    if (query.minHarga) {
        const minHargaInt = parseInt(query.minHarga);
        constructQuery.minPricePerHours = {
            $gte: minHargaInt
        };
    }
    if (query.maxHarga) {
        const maxHarga = parseInt(query.maxHarga);
        constructQuery.maxPricePerHours = {
            $lte: maxHarga
        };
    }
    if (query.lokasi) {
        constructQuery.city = { 
            $all: Array.isArray(query.lokasi) ? query.lokasi : [query.lokasi]
        };
    }
    if (query.facility) {
        constructQuery.facility = { 
            $all: Array.isArray(query.facility) ? query.facility : [query.facility]
        };
    }
    return constructQuery
}

export default router