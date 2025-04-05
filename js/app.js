
let contador = {};

function alterarStatus(numero){
    event.preventDefault();//previne de voltar ao topo da pagina quando botao for clicado
    console.log(`Botao ${numero} clicado`);//mostra no console qual botao foi clicado
    let jogo = `game-${numero}`;//cria uma variavel para poder buscar o id no formato questa do html
    let botao = document.getElementById(jogo).querySelector(".dashboard__item__button");
    let imagem = document.getElementById(jogo).querySelector(".dashboard__item__img");
    let nome = document.getElementById(jogo).querySelector(".dashboard__item__name").textContent;
    
    if(!contador[jogo]){
        contador[jogo] = 0
    }

    if(botao.innerText=="Alugar"){
            botao.classList.add("dashboard__item__button--return");
            imagem.classList.add("dashboard__item__img--rented");
            botao.innerText = "Devolver";
            contador[jogo]++;
            }else{
            if("sim"===prompt(`Você realmente deseja devolver o jogo ${nome}? Se quiser digite sim`).toLowerCase()){
            botao.classList.remove("dashboard__item__button--return");
            imagem.classList.remove("dashboard__item__img--rented");
            botao.innerText = "Alugar";}
            else{alert("Devolução cancelada!")}
            }

    console.log(`O jogo ${nome} foi alugado ${contador[jogo]} vez`)
}

// 