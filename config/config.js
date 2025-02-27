import dotenv from 'dotenv'

dotenv.config()

const MongoDBUrl = process.env.MongoDBUrl
const PORT = process.env.PORT

export { MongoDBUrl, PORT }