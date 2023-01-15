"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const addUser_1 = require("../functions/addUser");
const alteraRecado_1 = require("../functions/alteraRecado");
const cadastraRecado_1 = require("../functions/cadastraRecado");
const getUser_1 = require("../functions/getUser");
const getUserRecados_1 = require("../functions/getUserRecados");
const removeUserArrayUsuariosLogados_1 = require("../functions/removeUserArrayUsuariosLogados");
const verificaUsuarioLogado_1 = require("../functions/verificaUsuarioLogado");
const checkEmailESenha_1 = require("../middlewares/checkEmailESenha");
const checkInfosCadastro_1 = require("../middlewares/checkInfosCadastro");
const checkRecadoExiste_1 = require("../middlewares/checkRecadoExiste");
const checkUsuarioLogado_1 = require("../middlewares/checkUsuarioLogado");
const store_1 = require("../store");
exports.router = (0, express_1.Router)();
// Usuarios
exports.router.get('/', (req, res) => {
    return res.status(200).json({ api: "Gugol Recados API" });
});
exports.router.post('/cadastro', [checkInfosCadastro_1.checkInfosCadastro, checkEmailESenha_1.checkEmailESenha], (req, res) => {
    (0, addUser_1.addUser)(req, res);
    console.table(store_1.storeUsuarios);
});
exports.router.post('/logar', [checkEmailESenha_1.checkEmailESenha], (req, res) => {
    (0, getUser_1.getUser)(req, res);
});
exports.router.delete('/logout/:id', (req, res) => {
    (0, removeUserArrayUsuariosLogados_1.removeUserArrayUsuariosLogados)(req, res);
});
exports.router.get('/usuarioLogado/:id', (req, res) => {
    (0, verificaUsuarioLogado_1.verificaUsuarioLogado)(req, res);
});
// Recados
exports.router.get('/recados/:id', [checkUsuarioLogado_1.checkUsuarioLogado], (req, res) => {
    (0, getUserRecados_1.getUserRecados)(req, res);
});
exports.router.post('/recados/novorecado', [checkUsuarioLogado_1.checkUsuarioLogado], (req, res) => {
    (0, cadastraRecado_1.cadastraRecado)(req, res);
});
exports.router.put('/recados', [checkUsuarioLogado_1.checkUsuarioLogado, checkRecadoExiste_1.checkRecadoExiste], (req, res) => {
    (0, alteraRecado_1.alteraRecado)(req, res);
});
// Rotas para carregar todas informações
exports.router.get('/todosrecados', (req, res) => {
    return res.status(200).send({
        dados: store_1.storeRecados
    });
});
exports.router.get('/todosusuarios', (req, res) => {
    return res.status(200).send({
        dados: store_1.storeUsuarios
    });
});
exports.router.get('/todosusuarioslogados', (req, res) => {
    return res.status(200).send({
        dados: store_1.storeUsuariosLogados
    });
});
//# sourceMappingURL=routes.js.map