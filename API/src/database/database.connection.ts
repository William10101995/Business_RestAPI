import mongoose from 'mongoose'
import config from '../config'

//Conecction to DB BUSSINES
async function connections (){
    const db = await mongoose.connect(`${config.MONGO_URI}`, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(db.connection.name)

}

export default {connections} 