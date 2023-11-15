"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLibro = exports.updateLibro = exports.createLibro = exports.getLibro = exports.getLibros = void 0;
const connection_1 = __importDefault(require("../connection/connection")); // DB
function getLibros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, connection_1.default)();
            const query = `SELECT * FROM libros`;
            const resultados = yield connection.query(query);
            return res.json(resultados[0]);
        }
        catch (e) {
            console.error(e);
            res.status(500).send('Error interno del servidor');
        }
    });
}
exports.getLibros = getLibros;
function getLibro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, connection_1.default)();
        try {
            const query = `SELECT * FROM libros WHERE idLibro = ?`;
            const resultado = yield connection.query(query, [req.params.idLibro]);
            res.json(resultado[0]);
        }
        catch (err) {
            throw new Error('Error: ' + err);
        }
    });
}
exports.getLibro = getLibro;
function createLibro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, connection_1.default)();
        try {
            const newLibro = req.body;
            const query = `INSERT INTO libros SET ?`;
            yield connection.query(query, [newLibro]);
            res.json({ message: 'Nuevo libro añadido' });
        }
        catch (err) {
            throw new Error('Error ' + err);
        }
    });
}
exports.createLibro = createLibro;
function updateLibro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, connection_1.default)();
        try {
            const updatedLibro = req.body;
            const query = `UPDATE libros SET ? WHERE idLibro = ? `;
            yield connection.query(query, [updatedLibro, req.params.idLibro]);
            res.json({ message: 'Libro actualizado' });
        }
        catch (err) {
            throw new Error('Error ' + err);
        }
    });
}
exports.updateLibro = updateLibro;
function deleteLibro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, connection_1.default)();
        try {
            const query = `DELETE FROM libros WHERE idLibro = ?`;
            yield connection.query(query, [req.params.idLibros]);
            res.json({ message: 'Libro eliminado' });
        }
        catch (err) {
            throw new Error('Error ' + err);
        }
    });
}
exports.deleteLibro = deleteLibro;
//# sourceMappingURL=libro.controller.js.map