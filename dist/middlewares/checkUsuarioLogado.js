"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUsuarioLogado = void 0;
const store_1 = require("../store");
const checkUsuarioLogado = (req, res, next) => {
    const { usuario } = req.body;
    const { id } = req.params;
    const existe = store_1.storeUsuariosLogados.some(e => e.idTemporario === usuario);
    const existeParams = store_1.storeUsuariosLogados.some(e => e.idTemporario === id);
    if (!existe && !existeParams) {
        return res.status(404)
            .json({
            success: false,
            message: 'Usuario não logado',
            data: null
        });
    }
    next();
};
exports.checkUsuarioLogado = checkUsuarioLogado;
//# sourceMappingURL=checkUsuarioLogado.js.map