"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alteraRecado = void 0;
const store_1 = require("../store");
const alteraRecado = (req, res) => {
    const { id, titulo, descricao, data, usuario, visivel, ativo } = req.body;
    const usuarioLogado = store_1.storeUsuariosLogados.find(u => u.idTemporario === usuario);
    const emailLogado = usuarioLogado.email;
    const indiceRecado = store_1.storeRecados.findIndex(r => r.id === id);
    if (store_1.storeRecados[indiceRecado].usuario !== emailLogado) {
        return res.status(401)
            .json({
            success: false,
            message: "A mensagem que se deseja alterar não pertence ao usuário logado",
            data: null
        });
    }
    const recadoAtualizado = {
        id,
        titulo,
        descricao,
        data,
        usuario: emailLogado,
        visivel,
        ativo
    };
    store_1.storeRecados[indiceRecado] = recadoAtualizado;
    return res.status(200)
        .json({
        success: true,
        message: "Recado alterado",
        data: recadoAtualizado
    });
};
exports.alteraRecado = alteraRecado;
//# sourceMappingURL=alteraRecado.js.map