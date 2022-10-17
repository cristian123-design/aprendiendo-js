const obtenerInformacion = (materia) =>{

    materias ={
        fisica : ["pedro","juan","pepito","coffla","paparatzo"],
        programacion : ["pedro","juan","pepito","coffla","paparatzo"],
        matematicas : ["pedro","juan","pepito","coffla","paparatzo"],
        quimica: ["pedro","juan","pepito","coffla","paparatzo"]
    }
    if (materias[materia] != undefined){
        return [materias[materia],materia[materias]];
    }else{
        return materias;
    }
}
const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);

if (informacion!= false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: 
    <b style="color: red">${profesor}</b><br>Los alumnos son: 
    <b style="color: blue">${alumnos}</b></br><br>`);
}
}

const cantidadDeClases = (alumnos) =>{
    let informacion = obtenerInformacion();
    clasesPresentes = [];
    let cantidad =  0;
    for (info in informacion){
        if (informacion[info].includes(alumnos)){
            cantidad ++;
            clasesPresentes.push(" " + info);
        }

    }
    return `<b style="color: blue">
    ${alumnos}</b> esta en <b>${cantidad} clases: </b><br> esta cursando las clases: <b>${clasesPresentes}</b></br>`;
}




mostrarInformacion('fisica');
mostrarInformacion('quimica');
mostrarInformacion('programacion');
mostrarInformacion('matematicas');

document.write(cantidadDeClases('coffla'));