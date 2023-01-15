"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaUsuarioLogado = void 0;
const store_1 = require("../store");
const verificaUsuarioLogado = (req, res) => {
    const { id } = req.params;
    const estaNaLista = store_1.storeUsuariosLogados.some(u => u.idTemporario === id);
    if (estaNaLista) {
        return res.status(200)
            .json({
            success: true,
            message: 'Usuario já está logado',
            data: id
        });
    }
    return res.status(404)
        .json({
        success: true,
        message: 'Usuario não está logado',
        data: null
    });
};
exports.verificaUsuarioLogado = verificaUsuarioLogado;
//# sourceMappingURL=verificaUsuarioLogado.js.map