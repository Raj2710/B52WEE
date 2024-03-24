import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = `${process.env.DB_URL}/${process.env.DB_NAME}`

console.log(url)

mongoose.connect(url)

export default mongoose