import { IRecado } from "../interfaces/IRecado";
import { IUserLogado } from "../interfaces/IUserLogado";
import { IUsuario } from "../interfaces/IUsuario";

export const storeUsuarios: Array<IUsuario> = [{
    email: 'admin@admin.com',
    senha: 'admin'
}]
export const storeRecados: Array<IRecado> = [
    {
        id: "12708228-d201-4e63-ad1e-4742254ec775",
        titulo: "Titulo Admin 1",
        descricao: "Descrição Admin 1",
        data: '15/01/2023',
        usuario: 'admin@admin.com',
        visivel: true,
        ativo: true
    },
    {
        id: "b3d1088a-3669-461d-9a04-6d57507178f0",
        titulo: "Titulo Admin 2",
        descricao: "Descrição Admin 2",
        data: '15/01/2023',
        usuario: 'admin@admin.com',
        visivel: true,
        ativo: true
    },
    
]
export const storeUsuariosLogados: Array<IUserLogado> = []