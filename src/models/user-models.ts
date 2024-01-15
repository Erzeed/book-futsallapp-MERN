import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

export type UserType = {
    _id: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
})

userSchema.pre("save", async function (next) {
    if(this.isModified("password")) {
        this.password = await bcryptjs.hash(this.password, 8)
    }
    next();
})

const user = mongoose.model<UserType>("User", userSchema);

export default user;