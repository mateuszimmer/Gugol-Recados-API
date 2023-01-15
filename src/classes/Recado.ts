import { v4 as uuid } from "uuid";
import { IRecado } from "../interfaces/IRecado";

export class Recado implements IRecado {
    id: string;
    visivel: boolean;
    ativo: boolean;
    
    constructor(
        public titulo: string,
        public descricao: string,
        public data: string,
        public usuario: string){
            this.id = uuid()
            this.visivel = true,
            this.ativo = true
        }
}