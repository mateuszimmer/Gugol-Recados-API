import { Request, Response } from "express"
import { IResposta } from "../interfaces/IResposta"
import { storeUsuariosLogados } from "../store"

export const verificaUsuarioLogado = (req: Request, res: Response) => {
    const {id} = req.params

    const estaNaLista = storeUsuariosLogados.some(u => u.idTemporario === id)

    if(estaNaLista) {
        return res.status(200)
        .json({
            success: true,
            message: 'Usuario já está logado',
            data: id
        } as IResposta)
    }

    return res.status(404)
    .json({
        success: true,
        message: 'Usuario não está logado',
        data: null
    } as IResposta)
}