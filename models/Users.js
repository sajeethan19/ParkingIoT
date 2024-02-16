import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String
});

const UserModel = model("Users", UserSchema);

export default UserModel; // Correcting the export statement