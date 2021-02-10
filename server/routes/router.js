const express = require('express');

var Post = require('../models/Post')

var router = express.Router();

router.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
        if (err) {
            res.json(err);
        } else {
            res.json(posts);
        }
    })
});

router.get('/:id', function(req, res) {
    Post.findOne({ "_id": req.params.id }, function(err, singlePost) {
        if (err) {
            res.json(err);
        } else {
            res.json(singlePost);
        }
    })
})

router.post('/', function(req, res) {
    Post.create(req.body);
})

router.put('/:id', function(req, res) {
    Post.findOne({ "_id": req.params._id }, function(err, post) {
        if (err) {
            res.json(err);
        } else {
           post.set(req.body);
           post.save();
           res.json("PUT Success");
           
        }
    })
})

router.delete('/:id', function(req, res) {
    Post.findOne({ "_id": req.params.id }, function(err, post) {
        if (err) {
            res.json(err);
        } else {
            post.remove(function(err) {
                if (err) {
                    res.json(err);
                } else {
                    res.json("DELETED Post");
                }
            });
        }
    })
})

module.exports = router;