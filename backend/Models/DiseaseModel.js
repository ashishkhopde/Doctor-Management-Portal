import { Schema, model } from "mongoose";

const DiseaseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6QoOEPzf3SkFvbMgj-SQ4VrXbU81QmZUyg&s"
    },
    operatingDoctor: [{
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    }]
})

export default model("Disease", DiseaseSchema);