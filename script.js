const imagem = document.querySelector('img')
const fundo = document.querySelector('body')

function ligarLampada(){
    imagem.src = 'img/ideia.png'
}

function desligarLampada(){
    imagem.src = 'img/ideia(1).png'

}


setInterval(function desligarLampada() {
    imagem.src = 'img/ideia.png'
}, 150);

setInterval(function ligarLampada() {
    imagem.src = 'img/ideia(1).png'
}, 500);


