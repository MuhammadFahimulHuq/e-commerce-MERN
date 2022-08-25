import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoute.js'
import orderRoutes from './routes/orderRoute.js'
import uploadRoutes from './routes/uploadRoutes'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

app.get('/',(req,res)=>{
    res.send('Api running')
})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)
app.use(notFound)
app.use(errorHandler)

const __dirname = path.resolve()

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))