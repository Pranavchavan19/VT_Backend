// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectToDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
//         console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED: ", error);
//         process.exit(1)
//     }
// }

// export default connectToDB






import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Import DB_NAME constant from constants.js

const connectToDB = async () => {
    try {
        // Ensure the database name is included in the URI
        const MONGODB_URI = process.env.MONGODB_URI.includes(DB_NAME)
            ? process.env.MONGODB_URI
            : `${process.env.MONGODB_URI}/${DB_NAME}`;

        // Establish connection to MongoDB
        const connectionInstance = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Success message
        console.log(`\nMongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Log error and stop the application
        console.error("MONGODB connection FAILED: ", error.message);
        process.exit(1); // Exit process if MongoDB connection fails
    }
};

export default connectToDB;
