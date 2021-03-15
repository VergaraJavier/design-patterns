import {AseguradoraFactory} from './aseguradora-factory.ts'
import {AseguradoraVidaFactory} from './aseguradora-vida-factory.ts'
import {AseguradoraAutoFactory} from './aseguradora-auto-factory.ts'

const main = ()=>{

    let fabrica:AseguradoraFactory;

    // contratemos uno de vida
    fabrica = new AseguradoraVidaFactory();
    fabrica.celebrarContrato();
    
    //contratemos uno automotriz
    fabrica = new AseguradoraAutoFactory();   
    fabrica.celebrarContrato();

}

main();
