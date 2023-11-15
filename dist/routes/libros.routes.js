"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libro_controller_1 = require("../controllers/libro.controller");
const Libro = (0, express_1.Router)();
Libro.route('/')
    .get(libro_controller_1.getLibros)
    .post(libro_controller_1.createLibro);
Libro.route('/:idLibro')
    .get(libro_controller_1.getLibro)
    .delete(libro_controller_1.deleteLibro)
    .put(libro_controller_1.updateLibro);
exports.default = Libro;
//# sourceMappingURL=libros.routes.js.map