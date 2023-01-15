"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRecados = void 0;
const store_1 = require("../store");
const getUserRecados = (req, res) => {
    const { id } = req.params;
    const { visivel, titulo } = req.query;
    const visivelBoolean = visivel === 'true';
    const usuarioLogado = store_1.storeUsuariosLogados.find(u => u.idTemporario === id);
    const emailLogado = usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.email;
    const recadosDoUsuarioLogado = store_1.storeRecados.filter(r => (r.usuario === emailLogado &&
        r.ativo === true &&
        r.visivel === visivelBoolean &&
        r.titulo.toLowerCase().includes(titulo ? String(titulo).toLowerCase() : r.titulo.toLowerCase())));
    const respostaRecadosUsuarioLogadoComIdTemp = recadosDoUsuarioLogado.map((r) => ({
        ativo: r.ativo,
        data: r.data,
        descricao: r.descricao,
        titulo: r.titulo,
        usuario: id,
        visivel: r.visivel,
        id: r.id
    }));
    if (respostaRecadosUsuarioLogadoComIdTemp.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Recados não encontrados",
            data: null
        });
    }
    return res.status(200).json({
        success: true,
        message: "Recados encontrados",
        data: respostaRecadosUsuarioLogadoComIdTemp
    });
};
exports.getUserRecados = getUserRecados;
//# sourceMappingURL=getUserRecados.js.map