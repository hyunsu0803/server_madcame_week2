//Test용 DB

const UserModel = require("../src/models/userModel");

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
module.exports = {
    add,
    getAll,
    deleteAll
  };