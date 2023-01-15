import { Request, Response } from "express"
import { IResposta } from "../interfaces/IResposta"
import { storeUsuariosLogados } from "../store"

export const removeUserArrayUsuariosLogados = (req: Request, res: Response) => {
        const { id } = req.params
        
        const indiceLocalizado = storeUsuariosLogados.findIndex(u => u.idTemporario === id)

        if(indiceLocalizado >= 0){
            storeUsuariosLogados.splice(indiceLocalizado, 1)
        }

        res.status(200)
        .json({
            success: true,
            message: 'Usuario deslogado',
            data: null
        } as IResposta)
    }
