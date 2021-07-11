const express = require("express");
const db = require("../../database/postdb");
const router = express.Router();
var multer = require('multer');
const PostModel = require("../models/postModel");
var upload = multer({dest: 'uploads/'})

//ex) http://172.10.18.179/test/add/id1?pwd=1234
router.post("/add", (req,res) =>{
    db.add(
        req.body.title,
        req.body.content, 
        req.body.rate,
        req.body.rest,
        req.body.user,
        ()=> {
        res.status(200).send();
    });
});

router.post("/addtest",upload.single('postImg') ,(req,res) =>{
    console.log("addtest start");
    //console.log(req);
    console.log("single data")
    console.log(req.body);
    console.log(req.file);
    console.log(req.postImg);
    db.add(
        req.body.title,
        req.body.content, 
        req.body.rate,
        req.body.rest,
        req.body.user,
        req.file.path,
        ()=> {
        res.status(200).send();
    });
});

router.post("/get", (req,res)=>{
    db.getPhoto(req.body.title,(item)=>{
        console.log("res end start")
        res.end(item)
    })
})

router.get("/getall", (req,res) => {
    db.getAll((item) => {res.json(item)
    });
});

module.exports = router;