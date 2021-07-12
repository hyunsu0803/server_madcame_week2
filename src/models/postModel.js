/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const UserModel = require("./userModel");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
    rate: {
        type: Number,
        default: 0
    },
    writer: {
        type: String,
        required: "true"
    },
    rest: {
        type: String,
        required: "true"
    },
<<<<<<< HEAD
    restName: {
        type: String,
        required: "true"
=======
    restName:{
        type: String
>>>>>>> 0e94b78c7b56638a16240df499328feaf4e07050
    },
    postImg: {
        type: String
    }
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;