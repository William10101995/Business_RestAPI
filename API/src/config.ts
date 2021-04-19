import dotenv from 'dotenv'
dotenv.config();

export default {
    PORT : process.env.PORT || 3000,
    MONGO_URI : process.env.MONGO_URI,
    MONGO_USER : process.env.MONGO_USER,
    MONGO_PASS : process.env.MONGO_PASS,
}