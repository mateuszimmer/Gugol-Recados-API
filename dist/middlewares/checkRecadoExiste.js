"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRecadoExiste = void 0;
const store_1 = require("../store");
const checkRecadoExiste = (req, res, next) => {
    const { id } = req.body || req.params;
    const existeRecado = store_1.storeRecados.some(r => r.id === id);
    if (!id || !existeRecado) {
        res.status(404)
            .json({
            success: false,
            message: 'Recado não localizado',
            data: null
        });
    }
    next();
};
exports.checkRecadoExiste = checkRecadoExiste;
//# sourceMappingURL=checkRecadoExiste.js.map