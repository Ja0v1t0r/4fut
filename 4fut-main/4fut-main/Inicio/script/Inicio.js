let aviso = document.getElementById("box-msg");
let botaoMenu = document.querySelector(".mobile-menu")
let menu = document.getElementById("MenuMobile")

function FecharAviso() {
  
  aviso.classList.add("AvisoN")
}



function MenuBurguer() {
  // menu.classList.toggle("Desatiivado")
  // if (menu.classList = "ListaNavMobile") {
  //   menu.classList.remove("ListaNavMobile")
  //   menu.classList.add('ListaNavMobileDesativado')
  // } else {
  //   menu.classList.remove('ListaNavMobileDesativado')
  //   menu.classList.Add('ListaNavMobile')
  // }
  menu.classList.toggle("Desativado")
}

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    setting-name: setting-value
  })
})




// fetch(' https://newsapi.org/v2/everything?q=keyword&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
//   .then(response => response.json())
//   .then(data => {
    
    
//     // Manipule os dados recebidos da API aqui
//     // Por exemplo, se os dados são um objeto com um campo "texto", você pode fazer algo assim:
//     const texto = data.texto;

//     // Selecione o elemento HTML onde deseja exibir os dados
//     const conteudoElement = document.getElementById('conteudo');

    

//     // Atualize o conteúdo desse elemento com os dados da API
//     conteudoElement.textContent = texto;
//   });