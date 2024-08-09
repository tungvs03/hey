import mongoose from 'mongoose';

const connectDB = () => {
    try {
        const URI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/HeyApplication"
        const db = mongoose.connect(URI);
        console.log("Connect DB success");
        return db;
    } catch (err: any) {
        throw new Error(err.toString());
    }
}

export default connectDB;