let aviso = document.getElementById("box-msg");


function FecharAviso() {
  
  aviso.classList.add("AvisoN")
}



fetch(' https://newsapi.org/v2/everything?q=keyword&apiKey=a2381a88d1f04fc89754c87f3d3d8c29')
  .then(response => response.json())
  .then(data => {
    
    
    // Manipule os dados recebidos da API aqui
    // Por exemplo, se os dados são um objeto com um campo "texto", você pode fazer algo assim:
    const texto = data.texto;

    // Selecione o elemento HTML onde deseja exibir os dados
    const conteudoElement = document.getElementById('conteudo');

    

    // Atualize o conteúdo desse elemento com os dados da API
    conteudoElement.textContent = texto;
  });