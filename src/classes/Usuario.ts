import { IUsuario } from "../interfaces/IUsuario";

export class Usuario implements IUsuario {
    constructor(
        public email: string,
        public senha: string,
    ) {}
}