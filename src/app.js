// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";
// import axios from "axios";
// const app = new express();

// // app.use(
// //     cors({
// //         origin: process.env.CORS_ORIGIN,
// //         credentials: true,
// //     })
// // );

// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
  
// //   const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:5173', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));
//   const {
//     data: { ip }
//   } = await axios.get("http://localhost:5173", config);

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.static("public"));
// app.use(cookieParser());
// app.use(morgan("dev")); //HTTP request logger middleware for node.js 



// //routes import

// import userRouter from "./routes/user.routes.js";
// import commentRouter from "./routes/comment.routes.js";
// import likeRouter from "./routes/like.routes.js";
// import subscriptionRouter from "./routes/subscription.routes.js";
// import tweetRouter from "./routes/tweet.routes.js";
// import videoRouter from "./routes/video.routes.js";
// import healthcheckRouter from "./routes/healthcheck.routes.js";
// import playlistRouter from "./routes/playlist.routes.js";
// import dashboardRouter from "./routes/dashboard.routes.js";

// //routes declaration
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/comment", commentRouter);
// app.use("/api/v1/likes", likeRouter);
// app.use("/api/v1/subscriptions", subscriptionRouter);
// app.use("/api/v1/tweet", tweetRouter);
// app.use("/api/v1/video", videoRouter);
// app.use("/api/v1/healthcheck", healthcheckRouter);
// app.use("/api/v1/playlist", playlistRouter);
// app.use("/api/v1/dashboard", dashboardRouter);


// export default app;












// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";

// const app = new express();

// app.use(
//     cors({
//         origin: process.env.CORS_ORIGIN,
//         credentials: true,
//     })
// );

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.static("public"));
// app.use(cookieParser());
// app.use(morgan("dev")); //HTTP request logger middleware for node.js 

// app.get("/", (req, res) => {
//     res.send("Backend is up and running!");
// });


// //routes import

// import userRouter from "./routes/user.routes.js";
// import commentRouter from "./routes/comment.routes.js";
// import likeRouter from "./routes/like.routes.js";
// import subscriptionRouter from "./routes/subscription.routes.js";
// import tweetRouter from "./routes/tweet.routes.js";
// import videoRouter from "./routes/video.routes.js";
// import healthcheckRouter from "./routes/healthcheck.routes.js";
// import playlistRouter from "./routes/playlist.routes.js";
// import dashboardRouter from "./routes/dashboard.routes.js";

// //routes declaration
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/comment", commentRouter);
// app.use("/api/v1/likes", likeRouter);
// app.use("/api/v1/subscriptions", subscriptionRouter);
// app.use("/api/v1/tweet", tweetRouter);
// app.use("/api/v1/video", videoRouter);
// app.use("/api/v1/healthcheck", healthcheckRouter);
// app.use("/api/v1/playlist", playlistRouter);
// app.use("/api/v1/dashboard", dashboardRouter);


// export default app;










import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

// CORS configuration (ensure to replace CORS_ORIGIN with the correct URL or hardcode it)
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*', // replace with your frontend URL
        credentials: true, // Allows cookies to be sent
    })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public")); // Serve static files from the public folder
app.use(cookieParser());
app.use(morgan("dev")); // HTTP request logger middleware for Node.js

// Health Check Route
app.get("/", (req, res) => {
    res.send("Backend is up and running!");
});

// Routes Import
import userRouter from "./routes/user.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import videoRouter from "./routes/video.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

// Route Declarations
app.use("/api/v1/users", userRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);

// // Server Start
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN); // To verify it's being loaded

export default app;
