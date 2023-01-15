import { Request, Response } from 'express'
import { storeUsuarios } from '../store'
import { salvaArrayUsersLogados } from './salvaArrayUsersLogados'

export const getUser = (req: Request, res: Response) => {
    const { email, senha } = req.body

    const usuarioEncontrado = storeUsuarios.some(usuario => usuario.email === email && usuario.senha === senha)

    if(!usuarioEncontrado) {
        return res.status(401).json({
            success: false,
            message: 'Credenciais inválidas',
            data: null
        })   
    }
    
    const idTemporario = salvaArrayUsersLogados(email)

    return res.status(302).json({
        success: true,
        message: 'Autorizado',
        data: idTemporario
    })
}