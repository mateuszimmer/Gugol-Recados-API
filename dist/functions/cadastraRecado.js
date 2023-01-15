"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastraRecado = void 0;
const Recado_1 = require("../classes/Recado");
const store_1 = require("../store");
const cadastraRecado = (req, res) => {
    const { titulo, descricao, data, usuario } = req.body;
    let usuarioDoStoreDosUsuariosLogados = store_1.storeUsuariosLogados.find(u => u.idTemporario === usuario);
    const emailDoUsuario = usuarioDoStoreDosUsuariosLogados.email;
    const novoRecado = new Recado_1.Recado(titulo, descricao, data, emailDoUsuario);
    store_1.storeRecados.push(novoRecado);
    res.status(200).json({
        success: true,
        message: "Recado cadastrado",
        data: {
            titulo,
            descricao,
            data,
            usuario,
            id: novoRecado.id,
            visivel: novoRecado.visivel,
            ativo: novoRecado.ativo
        }
    });
};
exports.cadastraRecado = cadastraRecado;
//# sourceMappingURL=cadastraRecado.js.map