const mongoose = require('mongoose');

const conexion = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/api-rest-node");
        console.log("Conectado a DB");
    } catch(error){
        console.log(error);
        throw new Error("No se a podido realizar la conexion a la DB");
    }
}

module.exports = {
    conexion};