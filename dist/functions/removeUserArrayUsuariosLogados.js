"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserArrayUsuariosLogados = void 0;
const store_1 = require("../store");
const removeUserArrayUsuariosLogados = (req, res) => {
    const { id } = req.params;
    const indiceLocalizado = store_1.storeUsuariosLogados.findIndex(u => u.idTemporario === id);
    if (indiceLocalizado >= 0) {
        store_1.storeUsuariosLogados.splice(indiceLocalizado, 1);
    }
    res.status(200)
        .json({
        success: true,
        message: 'Usuario deslogado',
        data: null
    });
};
exports.removeUserArrayUsuariosLogados = removeUserArrayUsuariosLogados;
//# sourceMappingURL=removeUserArrayUsuariosLogados.js.map