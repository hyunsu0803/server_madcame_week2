/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const RestSchema = new mongoose.Schema({
    name: String,
    contact: String
});

const RestModel = mongoose.model("rest", RestSchema);
module.exports = RestModel;