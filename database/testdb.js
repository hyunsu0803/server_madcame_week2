//Test용 DB

const UserModel = require("../src/models/test");

function add(id,pwd, callback) {

    const newItem = new UserModel({
        id: id,
        pwd: pwd,
        T_F: true,
        count: (pwd).length
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
    UserModel.deleteMany({T_F: true}, (error)=> {
    });
}
module.exports = {
    add,
    getAll,
    deleteAll
  };