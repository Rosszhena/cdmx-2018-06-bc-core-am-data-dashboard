//const contLima = document.getElementById('lima')
//const contMexico = document.getElementById('mexico')
//const contSantiago = document.getElementById('santiago')
//console.log("hola", lugar);
window.datadasbord = {
traerlima: (sede,lugar) => {
  //contenido.innerHTML =`ddsgdhdhdfh`
  fetch('../data/laboratoria.json')
  .then(res =>res.json())
  .then(data =>{
    //console.log(data[sede].generacion)
        for(let lab in data[sede].generacion)
          lugar.innerHTML += "  "+lab +" - ";
  })
},

}
