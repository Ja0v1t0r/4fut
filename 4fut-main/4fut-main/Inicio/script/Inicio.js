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




// fetch('https://newsapi.org/v2/everything?q=futebol&sortBy=popularity&language=pt&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
// .then(response => response.json())
// .then(data => {
//   // Acesse o título e a URL da imagem dos dados recebidos da API
//   const titulo = data.articles[0].title;
//   const imagemURL = data.articles[0].urlToImage;
//   const descricao = data.articles[0].description;

//   // Selecione os elementos HTML onde deseja exibir o título e a imagem
//   const tituloElement = document.getElementById('TituloN1');
//   const imagemElement = document.getElementById('ImagemN1');
//   const descricaoElement = document.getElementById('descricaoN1');

//   // Atualize o conteúdo desses elementos com os dados da API
//   descricaoElement.textContent = descricao;
//   tituloElement.textContent = titulo;
//   imagemElement.src = imagemURL;


 
//   })

fetch('https://newsapi.org/v2/everything?q=futebol&sortBy=popularity&language=pt&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
.then(response => response.json())
.then(data => {

  for (let i = 0; i <= 7; i++) {
    // Acesse o título, a URL da imagem e a descrição dos dados recebidos da API
    const titulo = data.articles[i].title;
    const imagemURL = data.articles[i].urlToImage;
    const descricao = data.articles[i].description;
  // Acesse o título e a URL da imagem dos dados recebidos da API
  // const titulo = data.articles[1].title;
  // const imagemURL = data.articles[1].urlToImage;
  // const descricao = data.articles[0].description;

  // Selecione os elementos HTML onde deseja exibir o título e a imagem
  //const tituloElement = document.getElementById('TituloN2');
  //const imagemElement = document.getElementById('ImagemN2');
  // const descricaoElement = document.getElementById('descricaoN2');

  // Atualize o conteúdo desses elementos com os dados da API
  // descricaoElement.textContent = descricao;
  //tituloElement.textContent = titulo;
  //imagemElement.src = imagemURL;

  const noticiasElement = document.querySelector('.Noticias');

  //  estrutura HTML 
  const divN1 = document.createElement('div');
  divN1.classList.add('N1');
  
  const divImagemN1 = document.createElement('div');
  divImagemN1.classList.add('ImagemN1');
  
  const imgImagemN1 = document.createElement('img');
  imgImagemN1.id = 'ImagemN1';
  imgImagemN1.src = imagemURL;
  imgImagemN1.alt = 'Imagem da notícia';
  
  const divDescricaoN1 = document.createElement('div');
  divDescricaoN1.classList.add('DescricaoN1');
  
  const h1TituloN1 = document.createElement('h1');
  h1TituloN1.id = 'TituloN1';
  h1TituloN1.textContent= titulo;
  const pDescricaoN1 = document.createElement('p');
  pDescricaoN1.id = 'descricaoN1';
  pDescricaoN1.textContent=descricao
  
  divImagemN1.appendChild(imgImagemN1);
  divDescricaoN1.appendChild(h1TituloN1);
  divDescricaoN1.appendChild(pDescricaoN1);
  divN1.appendChild(divImagemN1);
  divN1.appendChild(divDescricaoN1);
  
  
  noticiasElement.appendChild(divN1);
  }

 
  })
//
  // const noticiasElement = document.querySelector('.Noticias');

  // //  estrutura HTML 
  // const divN1 = document.createElement('div');
  // divN1.classList.add('N1');
  
  // const divImagemN1 = document.createElement('div');
  // divImagemN1.classList.add('ImagemN1');
  
  // const imgImagemN1 = document.createElement('img');
  // imgImagemN1.id = 'ImagemN1';
  // imgImagemN1.src = '';
  // imgImagemN1.alt = 'Imagem da notícia';
  
  // const divDescricaoN1 = document.createElement('div');
  // divDescricaoN1.classList.add('DescricaoN1');
  
  // const h1TituloN1 = document.createElement('h1');
  // h1TituloN1.id = 'TituloN1';
  
  // const pDescricaoN1 = document.createElement('p');
  // pDescricaoN1.id = 'descricaoN1';
  
  
  // divImagemN1.appendChild(imgImagemN1);
  // divDescricaoN1.appendChild(h1TituloN1);
  // divDescricaoN1.appendChild(pDescricaoN1);
  // divN1.appendChild(divImagemN1);
  // divN1.appendChild(divDescricaoN1);
  
  
  // noticiasElement.appendChild(divN1);


//  .catch(error => {
//     console.error('Erro ao buscar os dados da API:', error);
//   });

  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function moveSlide(direction) {
  if (direction === 'next') {
    currentSlide++;
  } else if (direction === 'prev') {
    currentSlide--;
  }

  currentSlide = Math.max(0, Math.min(currentSlide, slides.length - 1));
  
  const slideWidth = slides[0].offsetWidth;
  const offset = -currentSlide * slideWidth;

  slider.style.transform = `translateX(${offset}px)`;
}

document.querySelector('#nextButton').addEventListener('click', () => moveSlide('next'));
document.querySelector('#prevButton').addEventListener('click', () => moveSlide('prev'));


