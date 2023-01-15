"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const store_1 = require("../store");
const salvaArrayUsersLogados_1 = require("./salvaArrayUsersLogados");
const getUser = (req, res) => {
    const { email, senha } = req.body;
    const usuarioEncontrado = store_1.storeUsuarios.some(usuario => usuario.email === email && usuario.senha === senha);
    if (!usuarioEncontrado) {
        return res.status(401).json({
            success: false,
            message: 'Credenciais inválidas',
            data: null
        });
    }
    const idTemporario = (0, salvaArrayUsersLogados_1.salvaArrayUsersLogados)(email);
    return res.status(302).json({
        success: true,
        message: 'Autorizado',
        data: idTemporario
    });
};
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map