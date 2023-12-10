import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://nitinshabad:nitinshabad@cluster0.limoxku.mongodb.net/';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
export default connectDB;
