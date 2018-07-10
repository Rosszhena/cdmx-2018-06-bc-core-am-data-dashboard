
let globalDatos; // variable global con la data

//Funcion de inicio para que cargue las sedes de manera dinamica
window.onload =  {
  sssss: () =>{
  fetch('https://raw.githubusercontent.com/yareh2/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
  .then(res =>res.json())
  .then(data =>{
    //console.log(data[sede].generacion)
        for(let lab in data){
        globalDatos = data;
        console.log(data)
        //impresión de sedes
           navtheme.innerHTML +='<a class="nav-link"  onclick="window.datadasbord.computeStudentsStats('+lab+')" href="#" id="'+lab+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>'+lab+'</a>'
        }
  })
}}

window.datadasbord = {
computeStudentsStats: (lab) => {

  navgeneration.innerHTML =" ";
  console.log("prueba" + lab.text);
  for(let gene in globalDatos[lab.text].generacion){
    console.log( globalDatos[lab.text].generacion);
    navgeneration.innerHTML += " \n "+gene +" ==== ";
    console.log(globalDatos[lab.text].generacion[gene].estudiantes);

      for(let estu in globalDatos[lab.text].generacion[gene].estudiantes){
        navgeneration.innerHTML += globalDatos[lab.text].generacion[gene].estudiantes[estu].nombre +" - ";
      }


  }

}
};

window.onload.sssss();

//window.datadasbord.computeStudentsStats();

/*
#### 1) `computeStudentsStats(laboratoria)`
Esta función es la responsable de "crear" la lista de estudiantes
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
estudiantes que se encuentra dentro de `laboratoria.json`.
La función debe devolver un nuevo arreglo de estudiantes donde cada objeto
de estudiante deberá tener una propiedad con el nombre `stats` y dentro,
sólo los datos requeridos.
##### Argumentos
* `laboratoria`: Objeto obtenido de la data en bruto.
##### Valor de retorno
Un arreglo de objetos `student` con las siguientes propiedades:
* `name`: Nombre respectivo de la estudiante.
* `email`: Correo electrónico de la estudiante.
* `campus`: Sede a la cual la estudiante pertenece.
* `generation`: Generación a la cual la estudiante pertenece.
* `stats`: Un objeto con las siguientes propiedades:
  * `status`: Status para identificar si la estudiante esta por debajo del 60,
  en 90 o superándolo, o dentro de la media en su `completedPercentage`.
  * `completedPercentage`: Número entero entre 0 y 100 que indica el porcentaje
  de completitud general del usuario con respecto a todos los temas asignados.
  * `topics`: Un objeto que incluye como propiedades los temas del programa y cada tema tiene las siguientes propiedades:
    - `completedPercentage`: Número entero entre 0 y 100 que indica el
    porcentaje de completitud general del usuario con respecto al tema
    respectivo.
    - `percentageDuration`: Número entero que indica el porcentaje de tiempo
    invertido según la duración indicada de cada tema, si el resultado son números flotantes deberías redondearlo al entero más cercano. Ejemplo: 78.78 = 79.
    - `subtopics`: Un objeto que incluye como propiedades los subtemas de ese
    tema en particular y cada subtema tiene las siguientes propiedades:
      - `completedPercentage`: Número entero entre 0 y 100 que indica el
      porcentaje de completitud general del usuario con respecto al subtema.
      - `type`: String que indica la modalidad del subtema.
      - `duration`: Número entero que indica el tiempo necesario a invertir
      para completar el subtema.
#### 2) `computeGenerationsStats(laboratoria)`
Esta función es la responsable de "crear" los status de cada generación que
vamos a "pintar" en la pantalla. La idea es "recorrer" el objeto que se
encuentra dentro de la "data".
La función debe devolver un nuevo arreglo de generaciones donde cada objeto
`generation` deberá tener una propiedad con el nombre `average` y dentro el
promedio de `completedPercentage` de todas las estudiantes de la generación.
##### Argumentos
* `laboratoria`: Objeto obtenido de la data en bruto.
##### Valor de retorno
Un arreglo de objetos `generation` con las siguientes propiedades:
* `campus`: Sede a la cual la generación pertenece.
* `generation`: Generación a la cual pertence
* `average`: Promedio del porcentajeCompletado de todas las estudiantes de la generación, si resulta un número flotante debería de ser redondeado al número entero más cercano.
* `count`: Número de estudiantes de la generación.
*/
