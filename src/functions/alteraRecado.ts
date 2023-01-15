import { Request, Response } from 'express'
import { Recado } from '../classes/Recado'
import { IRecado } from '../interfaces/IRecado'
import { IResposta } from '../interfaces/IResposta'
import { storeRecados, storeUsuariosLogados } from '../store'

export const alteraRecado = (req: Request, res: Response) => {
    const { id, titulo, descricao, data, usuario, visivel, ativo } = req.body

    const usuarioLogado = storeUsuariosLogados.find(u => u.idTemporario === usuario)
    const emailLogado = usuarioLogado!.email
    
    const indiceRecado = storeRecados.findIndex(r => r.id === id)

    if(storeRecados[indiceRecado].usuario !== emailLogado) {
        return res.status(401)
            .json({
                success: false,
                message: "A mensagem que se deseja alterar não pertence ao usuário logado",
                data: null
            } as IResposta)
    }
        
    const recadoAtualizado: IRecado = {
        id,
        titulo,
        descricao,
        data, 
        usuario: emailLogado,
        visivel,
        ativo
    }

    storeRecados[indiceRecado] = recadoAtualizado

    return res.status(200)
            .json({
                success: true,
                message: "Recado alterado",
                data: recadoAtualizado
            } as IResposta)

}