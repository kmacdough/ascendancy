var express = require('express'),
    router = express.Router()
  // , Comment = require('../models/comment')

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

router.get('/', function(req, res) {
	res.send("Hello from the index");
  // Comments.all(function(err, comments) {
  //   res.render('index', {comments: comments})
  // })
})

module.exports = router