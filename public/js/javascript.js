

  //presenta las categorias de residuos reciclables
function presentarCategorias() {
  var titulo = document.querySelector('#titulo');
  var mesa = document.querySelector("#mesa");

  //titulo.innerHTML = 'Gestión Inteligente de Residuos';
  mesa.innerHTML = "";

  for (let index = 0; index < myClasificacion.categoria.length; index++) {
    const element = myClasificacion;
    console.log(element.categoria[index].img)
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = 
      "<div class='tarjeta' onclick='abrirContenedor()'>"+
      "<div class='tarjeta_contenido'>"+
      "<img src='"+element.categoria[index].img+"' alt='plastico' width='100%'>"+
      "<p class='tarjeta_titulo'>"+element.categoria[index].name+"</p>"+
      "<p class='tarjeta_text'> Nivel "+element.categoria[index].nivel+" %</p>"+
      "<p class='tarjeta_text'> Peso "+element.categoria[index].peso+" Kg</p>"+
      "</div>"+"</div>";
    
    mesa.appendChild(tarjeta);
  }

}

function descubrir() {
  this.classList.add("descubierta");
}

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", abrirContenedor);
});


presentarCategorias();