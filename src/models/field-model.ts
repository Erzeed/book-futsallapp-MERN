import mongoose from "mongoose";

export type field = {
    typeField: string,
    fieldProfileId: string,
    pricePerHours: number,
    nameField: string,
    // dateBooking: Date[],
    // startTime: string[],
    // endTime:string[]
}

const schema = new mongoose.Schema<field>({
    fieldProfileId: {type: String, required: true},
    typeField: {type: String, required: true},
    pricePerHours: {type: Number, required: true},
    nameField: {type: String, required: true}
})

const typeField = mongoose.model<field>("typeField", schema)

export default typeField
