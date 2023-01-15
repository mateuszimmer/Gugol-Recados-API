import { UsuarioLogadoTemporario } from "../classes/UsuarioLogado"
import { storeUsuariosLogados } from "../store"

export const salvaArrayUsersLogados = (email: string) => {

    const novoUsuarioLogadoTemporario = new UsuarioLogadoTemporario(email)

    const jaExiste = storeUsuariosLogados.findIndex(u => u.email === email)

    if(jaExiste >= 0){
        storeUsuariosLogados[jaExiste] = novoUsuarioLogadoTemporario
    }else{
        storeUsuariosLogados.push(novoUsuarioLogadoTemporario)
    }

    return novoUsuarioLogadoTemporario.idTemporario
}