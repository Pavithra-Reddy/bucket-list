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
        console.log("success");
        res.json({ success: "place added" });
    });
  });

module.exports = router;