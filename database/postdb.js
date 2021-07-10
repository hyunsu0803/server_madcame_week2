const PostModel = require("../src/models/postModel");
const RestModel = require("../src/models/restModel");


function getAll(callback) {
    
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}

function add(title,content,ratio,rest,user,callback){
    var ratio_num = Number(ratio);

    const newItem = new PostModel({
        title: title,
        content: content,
        rate: ratio_num,
        rest: rest,
        writer: user
    });

    RestModel.findOne({ _id : rest}, (error,result) => {
        if(result.length!=0){
            var num  = result.rateNum;
            console.log(result);
            console.log("onto mars");
            console.log(result.rateNum);

            var myRate = result.rate*result.rateNum + ratio_num;
            var myRateNum = result.rateNum+1;
            myRate =myRate/myRateNum;

            console.log(myRate);
            console.log(myRateNum);

            RestModel.updateOne({_id : rest},{rate: myRate, rateNum: myRateNum},(error)=>{});

        }else{
            console.log("not found");
        }
    });

    

    newItem.save((error, result) => {
        callback(result);
    });
};

function deleteAll(callback) {
    PostModel.deleteMany({}, (error)=> {
    });
};

module.exports = {
    getAll,
    add,
    deleteAll
  };