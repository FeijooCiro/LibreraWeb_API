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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const libros_routes_1 = __importDefault(require("./routes/libros.routes"));
class Server {
    constructor(PORT) {
        this.PORT = PORT;
        this.paths = {
            index: '/',
            libros: '/libros'
        };
        this.App = (0, express_1.default)();
        // Métodos iniciales 
        this.Settings();
        this.middlewares();
        this.routes();
    }
    Settings() { this.App.set('port', this.PORT || process.env.PORT || 3000); }
    routes() {
        this.App.use(this.paths.index, index_routes_1.default);
        this.App.use(this.paths.libros, libros_routes_1.default);
    }
    middlewares() {
        this.App.use((0, cors_1.default)());
        this.App.use(express_1.default.json());
        this.App.set('view engine', 'ejs');
        this.App.use(express_1.default.static('public'));
    }
    Listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.App.listen(this.App.get('port'));
            console.log('Server running in Port:', this.App.get('port'));
        });
    }
}
exports.default = Server;
//# sourceMappingURL=app.js.map