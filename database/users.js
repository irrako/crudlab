var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({
name: String,
email: String,
password: String,
registerdate: Date,
sex: String,
address : String
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;