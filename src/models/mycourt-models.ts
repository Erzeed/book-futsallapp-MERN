import mongoose from "mongoose";

export type CourtProfile = {
    _id: string,
    userId: string,
    name: string,
    addres: string,
    city: string,
    description: string,
    facility: string[],
    typeField: string[],
    openingHours: string,
    closingTime: string,
    imageUrl: string[],
}

const schema = new mongoose.Schema<CourtProfile>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    addres: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    facility: [{ type: String, required: true }],
    typeField: [{ type: String, required: true }],
    openingHours: { type: String, required: true },
    closingTime: { type: String, required: true },
    imageUrl: [{ type: String, required: true }]
})

const fieldProfile = mongoose.model<CourtProfile>("CourtProfile", schema)

export default fieldProfile;