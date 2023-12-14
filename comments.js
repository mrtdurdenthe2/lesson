// Create new web server
const express = require("express");
const router = express.Router();
// Import comments controller
const commentsController = require("../controllers/comments.js");
// Import authentication middleware
const auth = require("../middleware/auth.js");

// Create new comment
router.post("/comments", auth, commentsController.createComment);
// Get all comments
router.get("/comments", auth, commentsController.getAllComments);
// Get all comments by post
router.get("/comments/post/:postId", auth, commentsController.getCommentsByPost);
// Get all comments by user
router.get("/comments/user/:userId", auth, commentsController.getCommentsByUser);
// Update comment by id
router.patch("/comments/:id", auth, commentsController.updateComment);
// Delete comment by id
router.delete("/comments/:id", auth, commentsController.deleteComment);

module.exports = router;

