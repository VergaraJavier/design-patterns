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

## singleton

imagina que decides crear una clase en tu aplicacion para guardar las preferencias por defecto,  
una manera de hacerlo seria crear una clase con un construtor vacio, propriedades privadas y  
solo getters... 

```
\\pseudo-codigo

public ApplicationSettings{
    
    public ApplicationSettings(){}

    private dateFormat = 'dd/MM/yyyy';

    public getDateFormat(){return this.dateFormat;}

}
```

El unico problema de este enfoque es que cada rutina que quiera consultar los valores de esta clase  
tendra que generar una instancia propia, la cual en terminos de memoria no es muy eficiente ya que  
tendremos multiples copias del mismo objeto guardadas en memoria.

Una manera de hacer mas eficiente esta solucion es aplicar es patron Singleton... revisa las fuentes
