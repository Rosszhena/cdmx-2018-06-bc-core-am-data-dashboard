window.computeStudentsStats = (laboratoria) => {
  let arrayStudents = [];
  for (key in laboratoria) {
    for (item in laboratoria[key].generacion) {
      for(stud in laboratoria[key].generacion[item]){
      

      for (i in laboratoria[key].generacion[item].estudiantes) {  
        const student = {
                      name: null,
                      email: null,
                      campus: null,
                      generation: null,
                      stats: {status: null,
                      completedPercentage: null,
                      topics:{completedPercentage: null,
                              percentageDuration: null,
                              subtopics:{completedPercentage: null,
                                        type: null,
                                        duration: null
                                        }
                              },
                              }
                        };
      student.campus = key; //sedes
      student.generation = item;
        student.name = laboratoria[key].generacion[item].estudiantes[i].nombre;
        student.email = laboratoria[key].generacion[item].estudiantes[i].correo;
        student.campus = key;
        student.generation = item;

        let status;
          if(laboratoria[key].generacion[item].estudiantes[i].progreso.porcentajeCompletado>90){
            status = "Buen Estudiante"
            } else if(laboratoria[key].generacion[item].estudiantes[i].progreso.porcentajeCompletado<60){
              status = "Estudiante con dificultades"
            } else{
              status = "Promedio estudiante"
            }
        student.stats.status = status;
        student.stats.completedPercentage = laboratoria[key].generacion[item].estudiantes[i].progreso.porcentajeCompletado;

         let objectTheme = laboratoria[key].generacion[item].estudiantes[i].progreso.temas;
      
         for(studentLab in student){
        for(theme in objectTheme) {
        student.stats.topics.completedPercentage = laboratoria[key].generacion[item].estudiantes[i].progreso.temas[theme].porcentajeCompletado;
        student.stats.topics.percentageDuration = laboratoria[key].generacion[item].estudiantes[i].progreso.temas[theme].duracionTemaCompletado;

        let objectSubTheme = laboratoria[key].generacion[item].estudiantes[i].progreso.temas[theme].subtemas;

            for(subtheme in objectSubTheme) {
              student.stats.topics.subtopics.completedPercentage = objectSubTheme[subtheme].completado;
              student.stats.topics.subtopics.type = objectSubTheme[subtheme].tipo;
              student.stats.topics.subtopics.duration = objectSubTheme[subtheme].duracionSubtema; 
            }     
        }
      }
   
        arrayStudents.push(student);
     
        }
       
      }
      
    }
    
  }
  return arrayStudents
}

window.computeGenerationsStats = (laboratoria) => {
  let arrayGenerations = [];  
  for (key in laboratoria) {
    for (item in laboratoria[key].generacion) {
        const generations = {
        generation: null,
        campus: null,
        count: 0,
        average: 0
      };
      generations.campus = key; //sedes
      generations.generation = item; //generaciones
      generations.count = laboratoria[key].generacion[item].estudiantes.length;//imprime el total de estudiantes por generacion
      let students = laboratoria[key].generacion[item].estudiantes; // imprime objeto con el total de estudiantes y sus estudiantes
      let sumaTotal = students.reduce((prev, current)=>{
          return prev + current.progreso.porcentajeCompletado;
        }, 0) ;
        generations.average = Math.round(sumaTotal / students.length);
        arrayGenerations.push(generations); 
    }//llave del for
  }
  return arrayGenerations;
}; 

window.sortStudents = (students, orderBy, orderDirection) => {

  }

window.filterStudents = (students, search) => {

}