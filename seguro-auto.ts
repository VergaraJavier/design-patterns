import {Seguro} from './seguro.ts'

export class SeguroAuto implements Seguro{

public validarContratante():boolean{
    console.log('Valide desde SeguroAuto');
    return true;
}    

public firmar():boolean{
    console.log('Firme desde SeguroAuto');
    return true;
}    

public activar():boolean{
    console.log('Active desde SeguroAuto');
    return true;
}    

}
