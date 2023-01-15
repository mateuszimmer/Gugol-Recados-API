import { Request, Response } from 'express'
import { Usuario } from '../classes/Usuario'
import { IResposta } from '../interfaces/IResposta'
import { storeUsuarios } from '../store'

export const addUser = (req: Request, res: Response) => {
    const { email, senha } = req.body
    const novoUsuario = new Usuario(email, senha)

    storeUsuarios.push(novoUsuario)

    res.status(201)
        .json({
            success: true,
            message: 'Usuario cadastrado com sucesso',
            data: `${novoUsuario.email}`
        } as IResposta)
}