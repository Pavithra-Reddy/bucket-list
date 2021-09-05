const router = require('express').Router();
let BucketList = require('../models/bucketlist.model');

router.route("/add").post(function(req, res) {
    const reqDoc = new BucketList({
        action:req.body.action,
        country:req.body.country,
        imageUrl:req.body.imageUrl,
        fulfilledDate:req.body.fulfilledDate,
        isComplete:req.body.isComplete,
        userId:req.body.userId
    });

    reqDoc.save(function(err) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("create place success");
        res.json({ success: "place added" });
    });
  });

  router.route("/view").get(function(req, res) {
    BucketList.find({}, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("fetch place success");
        res.json(docs);
    });
  });

  router.route("/view").get(function(req, res) {
    BucketList.find({}, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("fetch place success");
        res.json(docs);
    });
  });

  router.route("/delete").get(function(req, res) {
    BucketList.deleteOne({ _id: req.body.id }, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("deleted success");
        res.json(docs);
    });
  });
  
  router.route("/edit").post(function(req, res) {
    const reqDoc = new BucketList({
        action:req.body.action,
        country:req.body.country,
        imageUrl:req.body.imageUrl,
        fulfilledDate:req.body.fulfilledDate,
        isComplete:req.body.isComplete,
        userId:req.body.userId
    });

    const options = { "upsert": false };
    BucketList.updateOne({ _id: req.body.id }, reqDoc, options,function(err) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("create place success");
        res.json({ success: "place added" });
    })
  });

  
module.exports = router;