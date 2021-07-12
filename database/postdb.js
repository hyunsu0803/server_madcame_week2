const PostModel = require("../src/models/postModel");
const RestModel = require("../src/models/restModel");
const fs = require('fs');


function getAll(callback) {
    
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}

function add(title,content,ratio,rest,user,postImg,callback){
    var ratio_num = Number(ratio);


    RestModel.findOne({ _id : rest}, (error,result) => {
        if(result){
            var num  = result.rateNum;
            
            console.log("onto mars");
            console.log(result);
            console.log(result.rateNum);

            const newItem = new PostModel({
                title: title,
                content: content,
                rate: ratio_num,
                rest: rest,
                restName: result.name,
                writer: user,
                postImg: postImg
            });

            var myRate = result.rate*result.rateNum + ratio_num;
            var myRateNum = result.rateNum+1;
            myRate =myRate/myRateNum;

            console.log(myRate);
            console.log(myRateNum);

            RestModel.updateOne({_id : rest},{rate: myRate, rateNum: myRateNum},()=>{
                newItem.save(callback);
            });

        }else{
            console.log("not found");
        }
    });

};

function deleteAll(callback) {
    PostModel.deleteMany({}, (error)=> {
    });
};


function getPhoto(id, callback){
    console.log("getPhoto id is");
    console.log(id);
    PostModel.findOne({ _id : id}, (error,result) => {
        if(result){//maybe should be changed
                console.log("result success")
                console.log(result.title);
                fs.readFile(__dirname +"/../"+result.postImg,(err,data)=>{
                    console.log(__dirname);
                    if(err) console.log(err)
                    if(!data) console.log("data null")
                    console.log(data);
                    callback(data);
                })
        }else{
            console.log("id not found");
        }
    });

}

module.exports = {
    getAll,
    add,
    deleteAll,
    getPhoto
  };