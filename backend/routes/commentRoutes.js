const express = require("express");

const {
  addComment,
  getComments,
  deleteComment,
} = require("../controllers/commentController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addComment);

router.get("/:taskId", protect, getComments);

router.delete("/:id", protect, deleteComment);

module.exports = router;