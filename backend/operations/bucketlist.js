const router = require('express').Router();
let BucketList = require('../models/bucketlist.model');

router.route("/add").post(function(req, res) {
    const reqDoc = new BucketList({
        place:req.body.place
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

  router.route("/").get(function(req, res) {
    BucketList.find({}, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("fetch place success");
        res.json(docs);
    });
  });

module.exports = router;