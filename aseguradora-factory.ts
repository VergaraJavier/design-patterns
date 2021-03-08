import {Seguro} from './seguro.ts'

export abstract class AseguradoraFactory{

    abstract crearSeguro(): Seguro;
    
    public celebrarContrato():boolean{
    
        let miSeguro:Seguro;

        miSeguro = this.crearSeguro();

        miSeguro.validarContratante();
        miSeguro.firmar();
        miSeguro.activar();
       
        return true;
    }
}
