import { Request, Response } from "express"
import { Recado } from "../classes/Recado"
import { IResposta } from "../interfaces/IResposta"
import { storeRecados, storeUsuariosLogados } from "../store"

export const cadastraRecado = (req: Request, res: Response) => {
    const { titulo, descricao, data, usuario } = req.body

    let usuarioDoStoreDosUsuariosLogados = storeUsuariosLogados.find(u => u.idTemporario === usuario)

    const emailDoUsuario = usuarioDoStoreDosUsuariosLogados!.email

    const novoRecado = new Recado(titulo, descricao, data, emailDoUsuario!)

    storeRecados.push(novoRecado)

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
    }as IResposta)
}