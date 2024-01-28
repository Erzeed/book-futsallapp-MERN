import mongoose from "mongoose";

export type CourtProfile = {
    _id: string,
    userId: string,
    name: string,
    addres: string,
    city: string,
    description: string,
    mapAddres: string[],
    facility: string[],
    typeField: string[],
    openingHours: number,
    closingTime: number,
    imageUrl: string,
}

const schema = new mongoose.Schema<CourtProfile>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    addres: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    mapAddres: [{ type: String, required: true }],
    facility: [{ type: String, required: true }],
    typeField: [{ type: String, required: true }],
    openingHours: { type: Number, required: true },
    closingTime: { type: Number, required: true },
    imageUrl: { type: String, required: true }
})

const fieldProfile = mongoose.model<CourtProfile>("CourtProfile", schema)

export default fieldProfile;