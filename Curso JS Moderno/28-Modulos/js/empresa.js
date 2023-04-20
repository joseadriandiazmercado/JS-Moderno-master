import { Cliente } from "./cliente.js";

//Esto es para heredar una clase
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        //'super' es para heredar el constructor de la primera clase
        super(nombre, ahorro)
        this.categoria = categoria;
    }
}

