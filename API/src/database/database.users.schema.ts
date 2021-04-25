import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: String,
  lastName: String,
  dni: Number,
  email: String,
  occupation: String,
  table: any
} 
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
    unique: true,
    validate : {
      validator: function(dni : Number){
        return dni < 99999999 && dni > 1000000
      },
      message: "El DNI no es correcto"
    }
  },
  email: {
    type: String,
    require: true,
    trim: true,
    sparse: true
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

export default model<IUser>("Usuario", usersSchema);
