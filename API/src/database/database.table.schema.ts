import { Schema, model } from "mongoose";

//Schema Tables
//trim clean white
const tableSchema = new Schema({
  numberTable: {
    type: Number,
    require: true,
    trim: true,
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

module.exports = model("Table", tableSchema);
