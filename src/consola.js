let trabajo = '240 minutos de trabajo';
let estudio = '100 minutos de estudio';
let trabajoPractico = '100 minutos de trabajo practico';
let homeworks = '30 minutos de cosas de la casa';
let descanso = '10 minutos de descanso';


console.log('%cTareas','color:red');
for (let i = 1; i <15;i++){
    
    if (i === 0){
        console.group('semana 1');
    }
console.groupCollapsed('dia ' +(i));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(trabajoPractico);
console.log(homeworks);
console.groupEnd();

    if (i == 7){
       
            console.groupEnd();
            console.groupCollapsed('semana 2');
        
    }

}
console.groupEnd();
console.groupEnd()




