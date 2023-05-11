function paginar(pagina){
    var botaoPagina1 = document.getElementById("page1");
    var botaoPagina2 = document.getElementById("page2");
    var botaoPagina3 = document.getElementById("page3");

    var botaoAtivo1 = document.getElementById("botao1");
    var botaoAtivo2 = document.getElementById("botao2");
    var botaoAtivo3 = document.getElementById("botao3");

    botaoAtivo1.classList.remove("active");
    botaoAtivo2.classList.remove("active");
    botaoAtivo3.classList.remove("active");

    botaoPagina1.classList.remove("active");
    botaoPagina2.classList.remove("active");
    botaoPagina3.classList.remove("active");

    var paginaSelecionada = document.getElementById("page" +pagina);
    paginaSelecionada.classList.add("active");

    var botaoSelecionado = document.getElementById("botao" +pagina)
    botaoSelecionado.classList.add("active");
}