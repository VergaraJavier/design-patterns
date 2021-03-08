# design-patterns
Ejemplos en español de patrones de diseño. He intentado que cada ejemplo tenga un contexto de negocio,  
de manera que estos estan orientados para programadores que se desempeñen en entornos empresariales  
donde los usuarios son habitualmente administrativos. El objetivo es que estos ejemplos sean lo mas   
cercanos a tu dia a dia 

## instrucciones

En cada rama del proyecto encontraras un patron distinto, el README te dara el contexto del ejemplo  
para que luego puedas revisar el codigo. 

El proyecto esta escrito en Typescript para ser ejecutado con DENO, para ejecutar escribe:  

```
$ deno run main.ts
```

## factory method

Imagina que trabajas en una compañia de seguros, y necesitas implementar una funcion para celebrar contratos  
considera que tenemos solo dos lineas de negocios: seguros de vida y automotrices. Un primer acercamiento podria lucir asi:

```
public class Aseguradora{

public void celebrarContrato(string tipoProduto){
    
    SeguroVida miSeguroVida;
    SeguroAuto miSeguroAuto;

    if (tipoProduto=="vida"){
        miSeguroVida = new SeguroVida();

        miSeguroVida.validarContratante();
        miSeguroVida.firmar();
        miSeguroVida.activar();
    }else{
        miSeguroAuto = new SeguroAuto();

        miSeguroAuto.validarContratante();
        miSeguroAuto.firmar();
        miSeguroAuto.activar();
    }
}
}
```

ya te imaginas como se empezaria a ver esta funcion si tuviesemos 10,20,50 productos ... mejoremos esto con el  
patron factory, revisa las fuentes de la rama
