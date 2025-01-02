// import { Router } from "express";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
// import {
//     createTweet,
//     deleteTweet,
//     updateTweet,
//     getUserTweets,
// } from "../controllers/tweet.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";

// const router = Router();

// router.use(verifyJWT, upload.none()); 

// router.route("/").post(createTweet);
// router.route("/user/:userId").get(getUserTweets);
// router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

// export default router;
   


import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    createTweet,
    deleteTweet,
    updateTweet,
    getUserTweets,
    getAllTweets, // Add controller for public tweets
} from "../controllers/tweet.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Public route to get all tweets
router.route("/").get(getAllTweets);

// Protected routes (require authentication)
router.use(verifyJWT, upload.none());

router.route("/").post(createTweet);
router.route("/user/:userId").get(getUserTweets);
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router;
