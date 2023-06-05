import mongoose from "mongoose";

export const CryptoSchema = mongoose.Schema({
    base_unit: { type: String },
    quote_unit: { type: String },
    low: { type: String },
    high: { type: String },
    last: { type: String },
    type: { type: String },
    open: { type: String },
    volume: { type: String },
    sell: { type: String },
    buy: { type: String },
    at: { type: Number },
    name: { type: String }
})