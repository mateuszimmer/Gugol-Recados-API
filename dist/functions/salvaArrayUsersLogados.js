"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salvaArrayUsersLogados = void 0;
const UsuarioLogado_1 = require("../classes/UsuarioLogado");
const store_1 = require("../store");
const salvaArrayUsersLogados = (email) => {
    const novoUsuarioLogadoTemporario = new UsuarioLogado_1.UsuarioLogadoTemporario(email);
    const jaExiste = store_1.storeUsuariosLogados.findIndex(u => u.email === email);
    if (jaExiste >= 0) {
        store_1.storeUsuariosLogados[jaExiste] = novoUsuarioLogadoTemporario;
    }
    else {
        store_1.storeUsuariosLogados.push(novoUsuarioLogadoTemporario);
    }
    return novoUsuarioLogadoTemporario.idTemporario;
};
exports.salvaArrayUsersLogados = salvaArrayUsersLogados;
//# sourceMappingURL=salvaArrayUsersLogados.js.map