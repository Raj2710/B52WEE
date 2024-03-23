import mongodb from 'mongodb'

const url = 'mongodb+srv://Raj2710:Raj2710@raj.x3e0h.mongodb.net/?retryWrites=true&w=majority&appName=Raj'
const client = new mongodb.MongoClient(url)
const dbName = 'B52WEE'

export default {
    client,
    dbName
}