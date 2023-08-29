const express = require("express");
const postController = require("./../controllers/PostController");
const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.uploadPostPhoto, postController.createPost);
// postController.uploadPostPhoto
router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.uploadPostPhoto, postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
