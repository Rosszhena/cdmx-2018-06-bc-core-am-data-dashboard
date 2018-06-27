const contLima = document.getElementById('lima')
const contMexico = document.getElementById('mexico')
const contSantiago = document.getElementById('santiago')

contLima.addEventListener("click", event =>{
  window.datadasbord.traerlima("lima", contLima);
}
);

contMexico.addEventListener("click", event =>{
  window.datadasbord.traerlima("mexico", contMexico);
}
);

contSantiago.addEventListener("click", event =>{
  window.datadasbord.traerlima("santiago", contSantiago);
}
);
