import mongoose from "mongoose";

const creditSchema = new mongoose.Schema({
    userId: { type: String, require: true, unique: true, index: true},
    balance: { type: Number, default: 30 },
})

export default mongoose.models.Credit || mongoose.model('Credit', creditSchema );