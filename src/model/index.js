import mongoose from 'mongoose'

const dbName = 'B52WEE'
const url = `mongodb+srv://Raj2710:Raj2710@raj.x3e0h.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Raj`


mongoose.connect(url)

export default mongoose