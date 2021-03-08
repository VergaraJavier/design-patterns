import {Ventas} from './ventas.ts'
import {AseguradoraVidaFactory} from './aseguradora-vida-factory.ts'
import {AseguradoraAutoFactory} from './aseguradora-auto-factory.ts'

const main = ()=>{

    let comercio:Ventas;
    // contratemos uno de vida
    comercio = new Ventas(new AseguradoraVidaFactory());   
    comercio.venderSeguro();
   
    //contratemos uno automotriz
    comercio = new Ventas(new AseguradoraAutoFactory());   
    comercio.venderSeguro();

}

main();
