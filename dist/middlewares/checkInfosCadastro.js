"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInfosCadastro = void 0;
const store_1 = require("../store");
const checkInfosCadastro = (req, res, next) => {
    const { email, senha, reSenha } = req.body;
    const existeEmail = store_1.storeUsuarios.some(usuario => usuario.email === email);
    if (existeEmail)
        return res
            .status(406)
            .json({
            success: false,
            message: 'Não foi possível cadastrar usuário com as informações apresentadas.',
            data: null
        });
    if (senha !== reSenha)
        return res
            .status(400)
            .json({
            success: false,
            message: 'Senha e reSenha não conferem.',
            data: null
        });
    next();
};
exports.checkInfosCadastro = checkInfosCadastro;
//# sourceMappingURL=checkInfosCadastro.js.map