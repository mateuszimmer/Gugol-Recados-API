import { Request, Response } from "express"
import { IRecado } from "../interfaces/IRecado"
import { IResposta } from "../interfaces/IResposta"
import { storeRecados, storeUsuariosLogados } from "../store"

export const getUserRecados = (req: Request, res: Response) => {
    const { id } = req.params
    const { visivel, titulo } = req.query
    const visivelBoolean = visivel === 'true'

    const usuarioLogado = storeUsuariosLogados.find(u => u.idTemporario === id)
    const emailLogado = usuarioLogado?.email

    const recadosDoUsuarioLogado = storeRecados.filter(r => (
        r.usuario === emailLogado && 
        r.ativo === true &&
        r.visivel === visivelBoolean &&
        r.titulo.toLowerCase().includes(titulo? String(titulo).toLowerCase() : r.titulo.toLowerCase())
    ))

    const respostaRecadosUsuarioLogadoComIdTemp = recadosDoUsuarioLogado.map((r): IRecado => 
                ({
                    ativo: r.ativo,
                    data: r.data,
                    descricao: r.descricao,
                    titulo: r.titulo,
                    usuario: id,
                    visivel: r.visivel,
                    id: r.id
                }
            ))
    

    if(respostaRecadosUsuarioLogadoComIdTemp.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Recados não encontrados",
            data: null
        } as IResposta)
    }

    return res.status(200).json({
        success: true,
        message: "Recados encontrados",
        data: respostaRecadosUsuarioLogadoComIdTemp
    } as IResposta)

}