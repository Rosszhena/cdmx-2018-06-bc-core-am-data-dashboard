//let globalDatos;
window.onload = () =>{
    fetch('../data/laboratoria.json')
    .then(res =>res.json())
    .then(data =>{
      let generations = computeGenerationsStats(data);
       let students = computeStudentsStats(data);
     // console.log(students)
      sedes(data);
      listenersSedes(generations, students)  
    })
    }
    //funcion para imprimir sedes
    const sedes = (laboratoria) => {
       for(let item in laboratoria){ 
        lugar.innerHTML +=`<a class="nav-link sedes" >${item}</a>
        <p id="gen-${item}"></p>`
      }}
    //fin función sedes
    
    const listenersSedes = (generations, students) => {
      const linkSedes = document.getElementsByClassName('sedes'); // Colección HTML
          for (let i = 0; i < linkSedes.length; i++) {
          linkSedes[i].addEventListener('click', (event) => {
          let campus = event.target.innerHTML; //sede
          drawGenerations(generations, campus, students);
        });
    /*
        const linkGen = document.getElementsByClassName('generacion'); // Colección HTML
        for (let i = 0; i < linkGen.length; i++) {
          linkGen[i].addEventListener('click', (event) => {
          let std = event.target.innerHTML;
          console.log(std)
          drawStudents(generations, std, students);
   
          }); 
        }*/
        
    }
    
  
  }
    const listenersGen = (generations, students) => {
    
       
    }
    
    //funcion para imprimir generaciones
    const drawGenerations = (generations, campus, students) => {
     
      const filteredGenerations = generations.filter((generation) => {
          return generation.campus === campus;
      });
      const containerGen = document.getElementById(`gen-${campus}`);
     //console.log(containerGen)
      let templateGeneration = ``;
      filteredGenerations.forEach((gen) => {
      //console.log(gen)
          templateGeneration += `<a class="nav-link generacion"  href="#" id="'+item+'">${gen.generation}</a>`
          containerGen.innerHTML= templateGeneration   
          listenersGen(generations, students)            
      })
      const linkGen = document.getElementsByClassName('generacion'); // Colección HTML
      //console.log(linkGen)
      for (let i = 0; i < linkGen.length; i++) {
      linkGen[i].addEventListener('click', (event) => {
      let gen = event.target.innerHTML;
      drawStudents(gen, students, campus);

      }); 
    }
    }//fin funcion drawGenerations

    //funcion para imprimir estudiantes
    const drawStudents = (gen, students, campus) => {
    //  console.log(campus)
      const filteredStudentsByCampus = students.filter((student) => {
        return student.campus === campus
      });

      const filteredStudentsByGeneration = filteredStudentsByCampus.filter((student) => {
        return student.generation === gen;
      })
     // console.log(filteredStudentsByGeneration)
    const containerGen2 = document.getElementById(`gen-${campus}`);
     let templateGeneration2 = ``;
     filteredStudentsByCampus.forEach((gen) => {
     console.log(gen)
         templateGeneration2 += `<a class="nav-link generacion"  href="#" id="'+item+'">${gen.name}</a>`
         containerGen2.innerHTML= templateGeneration2   
        // listenersGen(generations, students)            
     })

     }//fin funcion drawGenerations
    