import {AseguradoraFactory} from './aseguradora-factory.ts'
import {AseguradoraVidaFactory} from './aseguradora-vida-factory.ts'
import {AseguradoraAutoFactory} from './aseguradora-auto-factory.ts'
import {Seguro} from './seguro.ts'
import {SeguroVida} from './seguro-vida.ts'
import {SeguroAuto} from './seguro-auto.ts'

export class Ventas{

    private fabrica:AseguradoraFactory;

    constructor(fabrica: AseguradoraFactory){
        this.fabrica = fabrica;
    }
    
    public venderSeguro(){
        this.fabrica.celebrarContrato();
    }
}
