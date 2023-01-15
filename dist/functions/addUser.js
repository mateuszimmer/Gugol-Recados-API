"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const Usuario_1 = require("../classes/Usuario");
const store_1 = require("../store");
const addUser = (req, res) => {
    const { email, senha } = req.body;
    const novoUsuario = new Usuario_1.Usuario(email, senha);
    store_1.storeUsuarios.push(novoUsuario);
    res.status(201)
        .json({
        success: true,
        message: 'Usuario cadastrado com sucesso',
        data: `${novoUsuario.email}`
    });
};
exports.addUser = addUser;
//# sourceMappingURL=addUser.js.map