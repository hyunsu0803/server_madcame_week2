/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        defualt: ""
    },
    pwd: String,
    T_F: {
        type: Boolean,
        default: false
    },
    count: Number
});

const UserModel = mongoose.model("test", UserSchema);
module.exports = UserModel;