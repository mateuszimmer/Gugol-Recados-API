"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogadoTemporario = void 0;
const uuid_1 = require("uuid");
class UsuarioLogadoTemporario {
    constructor(email) {
        this.email = email;
        this.idTemporario = (0, uuid_1.v4)();
        this.dataLogin = new Date();
    }
}
exports.UsuarioLogadoTemporario = UsuarioLogadoTemporario;
//# sourceMappingURL=UsuarioLogado.js.map