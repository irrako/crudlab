var mongoose = require('mongoose');
mongoose.connect("mongodb://172.28.0.2:27017/crud", {useNewUrlParser: true});
var db = mogoose.connection;
db.on("error", () => {
    console.log("ERROR no se puede conectar al servidor");
});
db.on("open", () => {
    console.log("conexion exitosa");
});
module.exports = mongoose;