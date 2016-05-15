"use strict";

var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/nodepop', function (err, db) {
   if (err){
       process.exit(1);
       return;
   }
    //Borrar las tablas que existan con un collection Drop
    if (db.anuncios) {
        db.anuncios.drop();
    }


    //Crear la colección
    db.anuncios.insert({
        "nombre": "Bicicleta", "venta": true,
        "precio": 230.15,
        "foto": "bici.jpg",
        "tags": [ "lifestyle", "motor"]
    });

    db.anuncios.insert(
        {
            "nombre": "iPhone 3GS", "venta": false,
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
        }
    );



});




//Inicializar la base de datos insertando el contenido del fichero anuncios.json


//Para llamar a este script:
    //load('ruta/install_db.js');