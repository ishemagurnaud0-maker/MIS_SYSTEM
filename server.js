import express from 'express';
import { connectDb } from './config/database.js';
import schoolRouter from './routes/schoolRoutes.js'

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

connectDb();

app.get('/test', (req, res) =>{res.json({message: 'Test endpoint working'})});


app.use('/schools',schoolRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

