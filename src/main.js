//let globalDatos;
window.onload = () =>{
    fetch('../data/laboratoria.json')
    .then(res =>res.json())
    .then(data =>{
      let generations = computeGenerationStats(data);
    
      //let students = computeStudentStats(data);
      sedes(data);
      listeners(generations)
    })
    }
    //funcion para imprimir sedes
    const sedes = (laboratoria) => {
       for(let item in laboratoria){ 
        lugar.innerHTML +=`<a class="nav-link sedes" >${item}</a>
        <p id="gen-${item}"></p>`
      }}
    //fin función sedes
    
    const listeners = (generations) => {
      const linkSedes = document.getElementsByClassName('sedes'); // Colección HTML
          for (let i = 0; i < linkSedes.length; i++) {
          linkSedes[i].addEventListener('click', (event) => {
          let campus = event.target.innerHTML;
    
          drawGenerations(generations, campus);
        });
    
        const linkGen = document.getElementsByClassName('generacion'); // Colección HTML
        for (let i = 0; i < linkGen.length; i++) {
          linkGen[i].addEventListener('click', (event) => {
        let campus = event.target.innerHTML;
    
      });
    }
    
    }
    
    //funcion para imprimir generaciones
    const drawGenerations = (generations, campus) => {
      //console.log(generations)
      const filteredGenerations = generations.filter((generation) => {
          return generation.campus === campus;
      });
      const containerGen = document.getElementById(`gen-${campus}`);
      console.log(containerGen)
      let templateGeneration = ``;
      filteredGenerations.forEach((gen) => {
       
          templateGeneration += `<a class="nav-link generacion"  href="#" id="'+item+'">${gen.generation}</a>`
          containerGen.innerHTML= templateGeneration                 
      })
    }}//fin funcion drawGenerations