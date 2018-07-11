let globalDatos; // variable global con la data

//Funcion de inicio para que cargue las sedes de manera dinamica
window.onload =  {
  funcion: () =>{

  fetch('../data/laboratoria.json')
  .then(res =>res.json())
  .then(data =>{

        for(let laboratoria in data){
        globalDatos = data;

        //impresión de sedes
        
           sedes.innerHTML +='<a class="nav-link"  onclick="window.computeGenerationsStats('+laboratoria+')" href="#" id="'+laboratoria+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>'+laboratoria+'</a>'
        //impresión de sedes para menú alumnas
          alumnas.innerHTML +='<div id="student'+laboratoria+'"><a class="nav-link"  onclick="window.computeStudentsStats('+laboratoria+')" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></polyline></svg>'+laboratoria+'</a></div>'
        }
  })
}}

window.computeStudentsStats = (laboratoria) => {
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

  }
}// Finaliza función computeStudentsStats

window.computeGenerationsStats = (pais,generacion) => {

  let mitable = document.getElementById("mitabla").getElementsByTagName('tbody')[0];
  mitable.innerHTML ="";
  let totalestudent = document.getElementById('total-estud-'+pais.text);
  totalestudent.innerHTML = "";
  totalestudent.innerHTML ="Total de Estudiantes:" + globalDatos[pais.text].generacion[generacion].estudiantes.length;
  for(let estu in globalDatos[pais.text].generacion[generacion].estudiantes){

   console.log(globalDatos[pais.text].generacion[generacion].estudiantes[estu]);
   let newRow   = mitable.insertRow(mitable.rows.length);

   let numerador = newRow.insertCell(0);
   let nombre = newRow.insertCell(1);
   let correo = newRow.insertCell(2);
   let porcentaje = newRow.insertCell(3);

   numerador.innerHTML = parseInt(estu)  + 1;
   nombre.innerHTML = globalDatos[pais.text].generacion[generacion].estudiantes[estu].nombre;
   correo.innerHTML = globalDatos[pais.text].generacion[generacion].estudiantes[estu].correo;
   porcentaje.innerHTML = globalDatos[pais.text].generacion[generacion].estudiantes[estu].progreso.porcentajeCompletado;
 }
}

window.onload.funcion();
