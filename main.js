let botaoPressionado = document.querySelector('#botao');

//Eventlistener no botao para que possa identificar quando foi clicado. 

botaoPressionado.addEventListener('click', function(e){
  //console.log('Esteve aqui!')
  let chaveNasa = 'GUJ8q60UaNK9SxkDLjiwuTdB4XV7QaxNaWv3uIkW'
  let data = document.getElementById('busca').value
  let retorno = $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=${chaveNasa}&date=${data}`, async : false}).responseJSON;
  console.log(retorno);
  if(document.getElementById('imagemNasa') == null){
    document.getElementById('imagem').innerHTML += `<div id="textoNasa">${retorno.explanation}</div>`;
    document.getElementById('imagem').innerHTML += `<img src='${retorno.url}' id='imagemNasa'>`;
  } else {
    document.getElementById('textoNasa').innerText = retorno.explanation;
    document.getElementById('imagemNasa').src = retorno.url;
  }
  e.preventDefault();
})



/*
async function requisicaoNasa() {
  let chaveNasa = 'GUJ8q60UaNK9SxkDLjiwuTdB4XV7QaxNaWv3uIkW'
  let data = document.getElementById('busca').value
  console.log(data)
  let retorno = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chaveNasa}&date=${data}`);
  console.log(retorno);
  let informacao = await retorno.json();
  console.log(informacao);
  document.getElementById('imagem').innerHTML += informacao.explanation
  document.getElementById('imagem').innerHTML += `<img src='${informacao.url}' id='imagemNasa'>`
}
*/