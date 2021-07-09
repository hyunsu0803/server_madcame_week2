//Test용 DB

const RestModel = require("../src/models/rest");


function getAll(callback) {
    
    RestModel.find({}, (error,result) => {
        callback(result);
    });

}

function addOne(callback){
    const newItem = new RestModel({
        name: "test name",
        contact: "000-0000"
    });
    newItem.save((error, result) => {
        callback(result);
    });
};

function deleteAll(callback) {
    RestModel.deleteMany({}, (error)=> {
    });
};

module.exports = {
    getAll,
    addOne,
    deleteAll
  };