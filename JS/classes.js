class Filme{
    constructor(id, titulo, ano, genero, duracao, sino, cartaz, direcao, atores, classi, ranking, btnDetalhes)
    {
        this.id=id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sino = sino;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.atores = atores;
        this.classi = classi;
        this.ranking = ranking;
        this.btnDetalhes=btnDetalhes;
    }

    getCard = async() =>{
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle=document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
    let divGenero=document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoProducao=document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow:1;");
    let divClassificacao=document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");

    hCardTitle.appendChild(document.createTextNode("Nome: "+this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoProducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classi));

    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
    };

setBtnDetalhes= () =>{
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id",this.id);
    this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
};

getCardDetalhes = () => {
    let cardDetalhe = document.createElement("div");
    cardDetalhe.setAttribute("class", "cardFilmeDeth");
    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-topz");
    cardImg.setAttribute("src", this.cartaz);
    let divSimDetalhes = document.createElement("div");
    divSimDetalhes.setAttribute("class", "divCardDetalhes");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("class", "card-body2");
    let divAllDetalhes = document.createElement("div");
    divAllDetalhes.setAttribute("id", "card-body");

    let tituloFilme = document.createElement("h3");
    tituloFilme.setAttribute("class", "cardInfos");
    let filmResumo = document.createElement("h5");
    filmResumo.setAttribute("class", "cardInfos");
    let filmGenero = document.createElement("h5");
    filmGenero.setAttribute("class", "cardInfos");
    let filmDura = document.createElement("h5");
    filmDura.setAttribute("class", "cardInfos");
    let filmAno = document.createElement("h5");
    filmAno.setAttribute("class", "cardInfos");
    let filmAtor = document.createElement("h5");
    filmAtor.setAttribute("class", "cardInfos");
    let filmElenco = document.createElement("h5");
    filmElenco.setAttribute("class", "cardInfos");
    let filmRank = document.createElement("h5");
    filmRank.setAttribute("class", "cardInfos");
    let filmAva = document.createElement("h5");
    filmAva.setAttribute("class", "cardInfos");

    tituloFilme.appendChild(document.createTextNode("Nome: "+this.titulo));
    filmGenero.appendChild(document.createTextNode("Gênero: "+this.genero));
    filmDura.appendChild(document.createTextNode( "Duração: "+this.duracao));
    filmAno.appendChild(document.createTextNode("Ano de lançamento: "+this.ano));
    filmRank.appendChild(document.createTextNode("Premios: "+this.classi));
    filmResumo.appendChild(document.createTextNode("Resumo: "+this.sino));
    filmAva.appendChild(document.createTextNode("Avaliação: "+this.ranking));
    filmElenco.appendChild(document.createTextNode("Diretor: "+this.direcao));
    filmAtor.appendChild(document.createTextNode("Atores: "+this.atores));

    cardDetalhe.appendChild(cardImg);
    cardDetalhe.appendChild(divSimDetalhes)
    divSimDetalhes.appendChild(divDetalhes);
    divDetalhes.appendChild(tituloFilme);
    divDetalhes.appendChild(filmResumo);
    divDetalhes.appendChild(filmAno);
    divDetalhes.appendChild(filmAtor);
    divDetalhes.appendChild(filmElenco);
    divDetalhes.appendChild(filmGenero);
    divDetalhes.appendChild(filmRank);
    divDetalhes.appendChild(filmAva);
    divDetalhes.appendChild(filmDura);
  
    return cardDetalhe;
  };
  

getBtnDetalhes = () =>{
    return this.btnDetalhes;
}

}
