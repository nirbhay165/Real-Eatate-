import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './user.route.js';  // Ensure the correct path

dotenv.config();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.error(err);
    });

const app = express();

app.use(express.json());  // Middleware to parse JSON bodies



app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
app.use("/api/user", userRouter);


