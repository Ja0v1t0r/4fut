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

// window.addEventListener('load', function(){
//   new Glider(document.querySelector('.glider'), {
//     setting-name: setting-value
//   })
// })




fetch(' https://newsapi.org/v2/everything?q=futebol&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
.then(response => response.json())
.then(data => {
  // Acesse o título e a URL da imagem dos dados recebidos da API
  const titulo = data.articles[0].title;
  const imagemURL = data.articles[0].urlToImage;

  // Selecione os elementos HTML onde deseja exibir o título e a imagem
  const tituloElement = document.getElementById('TituloN1');
  const imagemElement = document.getElementById('ImagemN1');

  // Atualize o conteúdo desses elementos com os dados da API
  tituloElement.textContent = titulo;
  imagemElement.src = imagemURL;

 
  })
 .catch(error => {
    console.error('Erro ao buscar os dados da API:', error);
  });

  

// fetch(' https://newsapi.org/v2/everything?q=keyword&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
// .then(response => response.json())
// .then(data => {
//   // Acesse o título e a URL da imagem dos dados recebidos da API
//   const titulo = data.articles[0].title;
//   const imagemURL = data.articles[0].urlToImage;

//   // Selecione os elementos HTML onde deseja exibir o título e a imagem
//   const tituloElement = document.getElementById('TituloN1');
//   const imagemElement = document.getElementById('imgN1');

//   // Atualize o conteúdo desses elementos com os dados da API
//   tituloElement.textContent = titulo;
//   imagemElement.src = imagemURL;


//   imagemElement.setAttribute('src', imagemURL)
 
//   })
//   .catch(error => {
//     console.error('Erro ao buscar os dados da API:', error);
//   });