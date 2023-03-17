class Filme{
    constructor(id, titulo, ano, genero, duracao, sino, cartaz, direcao, atores, classi, ranking, btnDetalhes)
    {
        this.id=id;
        this.titulo = titulo;
        this.direcao = direcao;
        this.atores = atores;
        this.sino = sino;
        this.ano = ano;
        this.classi = classi;
        this.genero = genero;
        this.duracao = duracao;
        this.cartaz = cartaz;
        this.ranking = ranking;
        this.btnDetalhes=null;
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
    hCardTitle.appendChild(document.createTextNode(this.titulo));
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

getCardDetalhes =()=>{
    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class","cardInfo");
    let cardFilmDe = document.createElement("div");
    cardFilmDe.setAttribute("class","cardFilmDe");
    let titleFilme = document.createElement("h3");
    titleFilme.setAttribute("class",this.titulo);
    let cardDeth = document.createElement("div");
    cardDeth.setAttribute("style","display:flex; justify-content:space-aroud;");
    let divAtor = document.createElement("h3");
    divAtor.setAttribute("class",this.atores);
    cardInfo.appendChild(cardFilmDe);
    cardFilmDe.appendChild(titleFilme);

    cardFilmDe.appendChild(this.getCardDetalhes);
    return cardInfo;
};

getBtnDetalhes = () =>{
    return this.btnDetalhes;
}

}
