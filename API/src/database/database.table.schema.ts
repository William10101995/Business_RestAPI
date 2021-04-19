import {Schema, model} from 'mongoose'


const tableSchema = new Schema ({
    numberTable: {
        type: Number    
    },
    quantityChair : {
        type: Number
    },
    users : {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    }

})

module.exports = model ('Table', tableSchema)

