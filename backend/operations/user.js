const router = require('express').Router();
let User = require('../models/user.model');

router.route("/add").post(function(req, res) {
    console.log(req.body);
    const reqDoc = new User({
        userName:req.body.userName,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });
    reqDoc.save(function(err) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("create user success");
        res.json({ success: "user added" });
    });
  });

  router.route("/").get(function(req, res) {
    User.find({}, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("fetch users success");
        res.json(docs);
    });
  });

module.exports = router;