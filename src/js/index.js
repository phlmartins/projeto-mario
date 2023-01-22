/* 
Clicar no veja o trailer - abri modal de mostrar o vídeo do filme.
Clicar no X, fechar o trailer.
*/
// parte 1 - mostar modal (video) na tela.
const botaoTrailer = document.querySelector(".botao-trailer");  // variável constante "const"
const botaoFecharModal = document.querySelector(".fechar-modal") // parte 2 - ao clicar no X, fechará a modal
const video = document.getElementById("video"); // identificar o video
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal (){
    modal.classList.toggle("aberto");
}

// bloco de função/ação (quando clicar no botão fará algo)
botaoTrailer.addEventListener("click", () => {
    // abrir modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () =>{
    //fechar modal
    alternarModal();
    //modal.classList.toggle("aberto"); //toggle - alterna a classe, se aberto, fecha, se fehcado, abre.
    video.setAttribute("src", "");
});
