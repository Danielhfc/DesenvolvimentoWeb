// Exercício 1
function colorirColunaLivros(){
  document.querySelectorAll('td.coluna1').forEach(x => x.style.background = 'red');
  document.querySelectorAll('td.coluna2').forEach(x => x.style.background = 'white');
}

function colorirColunaPaginas(){
  document.querySelectorAll('td.coluna2').forEach(x => x.style.background = 'blue');
  document.querySelectorAll('td.coluna1').forEach(x => x.style.background = 'white');
}

 const form_color1 = document.getElementsByClassName("coluna1");
 var i = 0, length = form_color1.length;

 for(i; i < length; i++){
  form_color1[i].addEventListener('click', colorirColunaLivros);
 }
//Coluna2
 const form_color2 = document.getElementsByClassName("coluna2");
 var i = 0, length = form_color2.length;

 for(i; i < length; i++){
  form_color2[i].addEventListener('click', colorirColunaPaginas);
 }
 
// Exercício 2
function limpar(){
  document.querySelectorAll('input.forms-text').forEach(x => x.value = '');
}

function criarLista(){
  var valores = [];
  
  for(var i = 0; i < 10; i++){
  valores[i] = document.getElementsByClassName('forms-text')[i].value;
  }

  var ol = document.createElement('ol');
    ol.setAttribute('id','itens');

    document.getElementById('lista').appendChild(ol);
    valores.forEach(criarItens);

    function criarItens(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','item');

        ol.appendChild(li);

        li.innerHTML=li.innerHTML + element;
    }
  limpar();
}

const form_button = document.getElementById('enviar');
form_button.addEventListener('click', criarLista);


// Exercício 3
function diminuirZoom(){
  document.querySelectorAll('img.galeria').forEach(x => x.classList.add("zoom-diminuido"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-aumentado"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-normal"));
 }

 function aumentarZoom(){
  document.querySelectorAll('img.galeria').forEach(x => x.classList.add("zoom-aumentado"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-diminuido"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-normal"));
 }

 const button1 = document.getElementsByClassName("zoom-negativo");
 button1[0].addEventListener('click', diminuirZoom);

 const button2 = document.getElementsByClassName("zoom-positivo");
 button2[0].addEventListener('click', aumentarZoom);