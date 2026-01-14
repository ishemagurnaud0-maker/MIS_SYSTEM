require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log('Database connection established')})
    .catch((err)=>{console.error('Database connection error:', err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log({message: 'Connected to the database successfully'});
});

app.get('/test', (req, res) =>{res.json({message: 'Test endpoint working'})});

const schoolRouter = require('./routes/school')
app.use('/schools',schoolRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

