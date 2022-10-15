
let materias ={
    fisica : ["pedro","juan","pepito","coffla","paparatzo"],
    programacion : ["pedro","juan","pepito","coffla","paparatzo"],
    matematicas : ["pedro","juan","pepito","coffla","paparatzo"],
    quimica: ["pedro","juan","pepito","coffla","paparatzo"]
}

const inscribir =(alumno,materia)=>{
    personas = materias[materia];
  
    if (personas.length>= 21){
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`)
    }else{
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica : personas,
                programacion : materias["programacion"],
                matematicas : materias["matematicas"],
                quimica: materias["quimica"]
            }

        }else if (materia == "programacion"){
            materias = {
                fisica : materias["fisica"],
                programacion : personas,
                matematicas : materias["matematicas"],
                quimica: materias["quimica"]
            }

        }else if (materia == "matematicas"){
            materias = {
                fisica : materias["fisica"],
                programacion : materias["programacion"],
                matematicas : personas,
                quimica: materias["quimica"]
            }
        }else if (materia == "quimica"){
            materias = {
                fisica : materias["fisica"],
                programacion : materias["programacion"],
                matematicas : materias["matematicas"],
                quimica: personas
            }
        }
        document.write(`Felicidades <b>${alumno}!</b> te has a la clase de <b>${materia}</b> correctamente <br><br>`);
    }
}
document.write(materias["fisica"] + "<br />");
inscribir('pedraas', 'fisica');
inscribir('cal', 'fisica');
inscribir('pancho', 'fisica');
inscribir('tendon', 'fisica');
inscribir('cuero', 'fisica');
inscribir('jorge', 'fisica');
inscribir('almando', 'fisica');
inscribir('curioso', 'fisica');
inscribir('tesy', 'fisica');
inscribir('is', 'fisica');
inscribir('la manta', 'fisica');
inscribir('el mejor', 'fisica');
inscribir('la mejor', 'fisica');
inscribir('jorge', 'fisica');
inscribir('almando', 'fisica');
inscribir('curioso', 'fisica');
inscribir('tesy', 'fisica');
inscribir('is', 'fisica');
inscribir('la manta', 'fisica');
inscribir('el mejor', 'fisica');
document.write('<br>' + materias["fisica"]);