const router = require('express').Router();
let User = require('../models/user.model');

router.route("/signup").post(function(req, res) {
    console.log(req.body);
    const reqDoc = new User({
        userName:req.body.userName,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
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

  router.route("/signin").post(function(req, res) {
    const reqDoc = new User();
    User.find({
        userName:req.body.userName,
        password:req.body.password
    }, function(err, docs) {
        if (err) {
            res.json({ error: err });
            return console.log(err);
        } 
        console.log("login success");
        res.json(docs);
    });
  });
  /*
  To get all
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
  */

module.exports = router;