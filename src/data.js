window.computeStudentStats = (laboratoria) => {
  let arrayStudents = [];
  for (key in laboratoria) {
    for (item in laboratoria[key].generacion) {
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
 // student.name = laboratoria[key].generacion[item].estudiantes.
}}
};

<<<<<<< HEAD
<<<<<<< HEAD
window.datadasbord = {
computeStudentsStats: (lab) => {
  console.log(lab)

=======
window.computeStudentsStats = (laboratoria) => {
>>>>>>> refmari/master
  navgeneration.innerHTML =" ";
  navgeneration2.innerHTML =" ";
  subtitulo.innerHTML = " ";
  console.log("prueba" + laboratoria.text);

  let _studenttmp = document.getElementById('student'+laboratoria.text);
  if(_studenttmp.children.length <4 ){
    for(let gene in globalDatos[laboratoria.text].generacion){
      console.log( gene);
      _studenttmp.innerHTML += '<a class="nav-link" onclick="window.computeGenerationsStats('+ laboratoria.text +',\''+ gene +'\')" href="#" id="generacion'+gene+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"></svg> '+gene+'</a>'

    }

=======
window.computeGenerationStats = (laboratoria) => {
  // Devolver un nuevo arreglo de generaciones
  let arrayGenerations = [];  
  for (key in laboratoria) {
    //console.log(generations.campus = key) //trae las sedes
  // console.log(laboratoria[key].generacion) //trae el objeto de generaciones
    for (item in laboratoria[key].generacion) {
      const generations = {
        generation: null,
        campus: null,
        count: null,
        average: null
      };
      generations.campus = key; //sedes
      generations.generation = item;
      //console.log(item) //trae el texto de las generaciones
      generations.count = laboratoria[key].generacion[item].estudiantes.length;
      //console.log(generations.count)//imprime el total de estudiantes por generacion 
      let students = laboratoria[key].generacion[item].estudiantes; // ESTO ES UN ARREGLO DE ESTUDIANTES
    // console.log(students)// imprime objeto con el total de estudiantes y sus estudiantes
      let sumaTotal = students.reduce((prev, current)=>{
        return prev + current.progreso.porcentajeCompletado;
      }, 0) ;
      generations.average = Math.round(sumaTotal / generations.count);
      //console.log(generations.average);
     // console.log(generations)
      //console.log(arrayGenerations);
      
      arrayGenerations.unshift(generations);
    //   students.forEach((student) => {
    //     console.log(student.progreso.porcentajeCompletado)
    //   })
 
    }//llave del for
    //console.log(generations)
>>>>>>> refmari/master
  }
  console.log(arrayGenerations);
  return arrayGenerations;
};