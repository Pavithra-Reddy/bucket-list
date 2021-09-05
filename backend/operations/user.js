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
        console.log("success");
        res.json({ success: "user added" });
    });
  });

module.exports = router;