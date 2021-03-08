import {AseguradoraFactory} from './aseguradora-factory.ts'
import {SeguroAuto} from './seguro-auto.ts'

export class AseguradoraAutoFactory extends AseguradoraFactory {

    crearSeguro():SeguroAuto{
        return new SeguroAuto();
    }    
}
