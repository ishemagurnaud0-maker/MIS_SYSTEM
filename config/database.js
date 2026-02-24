import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const connectDb = async() => {
    try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database Connection Established.');
    
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error({ message: 'Connection Error:', error: error.message });
    });
    db.once('open', () => {
        console.log({ message: 'Connection established successfully' });
    });
    
} catch (error) {
    console.error({ message: 'Connection failed', error: error.message });
    process.exit(1);
}};

export {connectDb};