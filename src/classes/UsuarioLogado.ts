import { v4 as uuid } from "uuid";
import { IUserLogado } from "../interfaces/IUserLogado";

export class UsuarioLogadoTemporario implements IUserLogado {
    idTemporario: string;
    dataLogin: Date;
    constructor(public email: string){
        this.idTemporario = uuid()
        this.dataLogin = new Date()
    }
}