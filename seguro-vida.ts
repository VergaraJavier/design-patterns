import {Seguro} from './seguro.ts'

export class SeguroVida implements Seguro{

public validarContratante():boolean{
    console.log('Valide desde SeguroVida');
    return true;
}    

public firmar():boolean{
    console.log('Firme desde SeguroVida');
    return true;
}    

public activar():boolean{
    console.log('Active desde SeguroVida');
    return true;
}    

}
