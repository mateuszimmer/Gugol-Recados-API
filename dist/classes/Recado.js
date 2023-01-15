"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recado = void 0;
const uuid_1 = require("uuid");
class Recado {
    constructor(titulo, descricao, data, usuario) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.usuario = usuario;
        this.id = (0, uuid_1.v4)();
        this.visivel = true,
            this.ativo = true;
    }
}
exports.Recado = Recado;
//# sourceMappingURL=Recado.js.map