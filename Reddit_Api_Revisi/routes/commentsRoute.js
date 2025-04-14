const express = require('express');
const router = express.Router();
const {
  getComments,
  addComment
} = require('../controllers/commentController');

router.get('/:postId', getComments);
router.post('/:postId', addComment);

module.exports = router;
