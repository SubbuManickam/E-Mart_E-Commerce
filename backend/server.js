import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();

//Connect to MongoDB instance through Mongoose
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err.message);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API for PayPal Payment Gateway API
app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

//API for uploading images for products
app.use('/api/upload', uploadRouter);

//API for initialising the MongoDB database collections
app.use('/api/seed', seedRouter);

//API for managing products from Admin screen
app.use('/api/products', productRouter);

//API for managing users from Admin screen
app.use('/api/users', userRouter);

//API for creating order history when user places an order
app.use('/api/orders', orderRouter);

//Error handling
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
})