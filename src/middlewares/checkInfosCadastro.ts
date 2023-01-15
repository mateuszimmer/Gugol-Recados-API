import { Request, Response, NextFunction } from "express";
import { IResposta } from "../interfaces/IResposta";
import { storeUsuarios } from "../store";

export const checkInfosCadastro = (req: Request, res: Response, next: NextFunction) => {
    const { email, senha, reSenha } = req.body
    const existeEmail = storeUsuarios.some(usuario => usuario.email === email)

    if(existeEmail) return res
        .status(406)
        .json({
            success: false,
            message: 'Não foi possível cadastrar usuário com as informações apresentadas.',
            data: null
        } as IResposta)
    
    if(senha !== reSenha) return res
        .status(400)
        .json({
            success: false,
            message: 'Senha e reSenha não conferem.',
            data: null
        } as IResposta)

    next()        
}