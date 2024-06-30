import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect
    (process.env.MONOGO_CONNECTION_KEY)
    .then(() => { console.log('MongoDB is Connected') })
    .catch((err) => console.log(err))

const app = express()

app.listen(3000, () => {
    console.log("servers is runnning on port 3000...")
})