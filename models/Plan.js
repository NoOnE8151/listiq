import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    amount: { type: Number, require: true, unique: true, index: true},
    price: { type: Number, default: 30 },
})

export default mongoose.models.Plan || mongoose.model('Plan', planSchema );