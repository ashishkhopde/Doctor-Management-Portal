import { Schema, model } from "mongoose";

const DocterSchema = new Schema({
    fullName:{
        type:String,
        required: [true, "Name is required"]
    },
    avatar:{
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBisZzgtQo1FlrhaZnUdoUp57Al5IqPzzOA&s"
    },
    education: {
        type: String,
        required: [true, "Education is required"]
    },
    fee: {
        type: Number,
        required: [true, "Fee is required"]
    }
});

export default model("Doctor", DocterSchema);