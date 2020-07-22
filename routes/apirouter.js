var express = require('express');
var router = express.Router();

 router.post('/users', (req, res) => {
 var datos = req.body;
 var registerdate = datos.date.split(",");
 var user = {};
 user["name"] = datos.name;
 user["email"] = datos.email;
 user["password"] = datos.password;
 user["sex"] = datos.sex;
 user["registerdate"] = new Date ();
 user["address"] = datos.address;
 
 var newuser = new USER(user);
 newuser.save().then(() => {
  res.status(200).json({"msn" : "Usuario Registrado"});
 });
});

module.exports = router;

//Tenemos el primer servicio post /user
//Probar los servicio con postman



