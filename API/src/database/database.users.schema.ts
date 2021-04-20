import { Schema, model } from "mongoose";

//Schema Users
//trim clean white
const usersSchema = new Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  dni: {
    type: Number,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  occupation: {
    type: String,
    require: true,
    trim: true,
  },
  table: {
    type: Schema.Types.ObjectId,
    ref: "Table",
  },
});

module.exports = model("Usuario", usersSchema);
