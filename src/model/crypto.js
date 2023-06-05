import mongoose from "mongoose";
import { CryptoSchema } from "../schema/crypto";

export const Crypto = mongoose.model("Crypto", CryptoSchema);