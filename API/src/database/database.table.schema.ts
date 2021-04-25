import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  numberTable: Number,
  quantityChair: Number,
  users: any
} 
//Schema Tables
//trim clean white
const tableSchema = new Schema({
  numberTable: {
    type: Number,
    require: true,
    trim: true,
    unique: true
  },
  quantityChair: {
    type: Number,
    require: true,
    trim: true,
  },
  users: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
});

export default model<IUser>("Table", tableSchema);
