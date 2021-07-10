//Test용 DB

const UserModel = require("../src/models/userModel");
const RestModel = require("../src/models/restModel");

function add(id,name, callback) {

    const newItem = new UserModel({
        id: id,
        name: name,
    });
    newItem.save((error, result) => {
        callback(result);
    });
}

function getAll(callback) {
    
    UserModel.find({}, (error,result) => {
        callback(result);
    });

}
function deleteAll(callback) {
    UserModel.deleteMany({}, (error)=> {
    });
}

function addFavorite(id,res,callback){
    UserModel.findOne({ id : id}, (error,result) => {
        if(result.length!=0){
            
        


        }else{
            console.log("id not found");
        }
    });
}

module.exports = {
    add,
    getAll,
    addFavorite,
    deleteAll
  };