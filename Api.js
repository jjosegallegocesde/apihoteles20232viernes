//Esta clase representa un servidor
import express from "express";

export class Api {
  constructor() {
    this.app = express()
    this.procesarPeticiones()
  }

  //1. Levantar el servidor
  levantarServidor() {
    this.app.listen(3000, function () {
      console.log("servidor operando");
    });
  }

  //2. Atiende las peticiones y responde
  procesarPeticiones() {
    this.app.post("/api/habitaciones", function (req, res) {
      res.send("estoy guardando una habitacion");
    })
    this.app.get("/api/habitaciones", function (req, res) {
      res.send("estoy buscando todas las habitaciones");
    })
    this.app.get("/api/habitacion", function (req, res) {
      res.send("estoy buscando una habitacion");
    })
    this.app.put("/api/habitaciones", function (req, res) {
      res.send("estoy modificando una habitacion");
    })
    this.app.delete("/api/habitaciones", function (req, res) {
      res.send("estoy eliminando una habitacion");
    })
  }

  //3. Se conecta a la Base de datos
}
