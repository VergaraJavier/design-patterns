import {AseguradoraFactory} from './aseguradora-factory.ts'
import {SeguroVida} from './seguro-vida.ts'

export class AseguradoraVidaFactory extends AseguradoraFactory {

    crearSeguro():SeguroVida{
        return new SeguroVida();
    }
}
