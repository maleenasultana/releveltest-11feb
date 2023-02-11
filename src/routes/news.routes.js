const express = require("express");
const router = express.Router();
const NewsController = require('../controllers/news.controller');

// Create routes for news here
router.get('/', NewsController.getAllNews);
router.get('/:category', NewsController.getNewsByCategory);
router.post('/', NewsController.createNews);
router.put('/:id', NewsController.updateNews);
router.delete('/:id', NewsController.deleteNews);

module.exports = router;