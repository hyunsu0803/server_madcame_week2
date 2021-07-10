const PostModel = require("../src/models/postModel");
const RestModel = require("../src/models/restModel");


function getAll(callback) {
    
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}

function add(title,ratio,rest,user,callback){
    const newItem = new PostModel({
        title: title,
        rate: ratio,
        rest: rest,
        writer: user
    });

    const query = RestModel.findOne({_id: rest});
    var mRatioNum = query[rateNum];
    mRatioNum = mRatioNum+1;

    var mRatio = Number(ratio);
    RestModel.updateOne({_id : rest},{rate: mRatio, rateNum: mRatioNum});

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