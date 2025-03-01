const imagem = document.querySelector('img')
const fundo = document.querySelector('body')

function ligarLampada(){
    imagem.src = 'img/ideia.png'
    fundo.style.backgroundColor = '#f4f4f4'
    
}
function desligarLampada(){
    imagem.src = 'img/ideia(1).png'

}


setInterval(function desligarLampada() {
    imagem.src = 'img/ideia.png'
}, 100);

setInterval(function ligarLampada() {
    imagem.src = 'img/ideia(1).png'
}, 200);


