import {Schema, model} from 'mongoose'

const usersSchema = new Schema ({
    firstName : {
        type: String
        
    },
    lastName : {
        type: String
    },
    email : {
        type: String, 
    },
    occupation : {
        type: String
    },
    table : {
        type: Schema.Types.ObjectId,
        ref: 'Table'
    }
})

module.exports = model ('Usuario', usersSchema)