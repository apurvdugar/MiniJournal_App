import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import entryRouter from './routes/entryRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000; 
 
connectDB();

// Middleware
app.use(express.json()); 
app.use(cookieParser());

// Routes       
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/entry', entryRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
