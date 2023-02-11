const express = require("express");
const router = express.Router();
const BookMarkController = require('../controllers/bookmark.controller');
const auth = require("../middleware/auth.middleware");

// Create routes for Bookmark here
router.post('/add', auth, BookMarkController.addBookMark);
router.get('/', auth, BookMarkController.getBookmarksByUserId);
router.delete('/:id', auth, BookMarkController.deleteBookmarkById);

module.exports = router;