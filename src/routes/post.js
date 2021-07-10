const express = require("express");
const db = require("../../database/postdb");
const router = express.Router();

//ex) http://172.10.18.179/test/add/id1?pwd=1234
router.post("/add", (req,res) =>{
    db.add(
        req.body.title, 
        req.body.rate,
        req.body.rest,
        req.body.user,
        ()=> {
        res.status(200).send();
    });
});

router.get("/getall", (req,res) => {
    db.getAll((item) => {res.json(item)
    });
});

module.exports = router;