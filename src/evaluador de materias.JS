const materias =  {
    fisica: [70,6,3,"fisica"],
    matematicas: [92,7,2,"matematicas"],
    logica: [95,9,4,"logica"],
    quimicas: [80,7,3,"quimicas"],
    calculo: [98,8,4,"calculo"],
    programacion: [94,6,2,"programacion"],
    biologia: [85,8,3,"biologia"],
    bbdd: [96,7,1,"bbdd"],
    algebra: [97,8,4,"algebra"]

}

const aprobo = ()=> {
    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        let materiasP = materias[materia][3];

        console.log(materiasP);
        
        if (asistencias >= 90){ 
            console.log('%c   Asistencias en orden','color:green');
        }else{

            console.log('%c   Falta de asistencias','color:red');
        }
        if (promedio >= 7) {
            console.log('%c   promedio en orden','color:green');
        }else{
            console.log('%c   promedio desaprobado','color:red');
            
        }
        if (trabajos >= 3){
            console.log('%c   trabajos en practicos','color:green');
            
        }else{
            console.log('%c   faltan trabajos practicos','color:red');
        }
    }

}
aprobo();