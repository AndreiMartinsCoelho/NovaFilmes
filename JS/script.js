let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async ()=>{
    if(inputBuscarFilme.value.length > 0)
    {
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=1f8c9e4&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);

            });
            listarFilmes(filmes);
        });

    }
    return false;

};

let listarFilmes = async(filmes)=>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML="";
    //console.log(listaFilmes);
    if(filmes.length>0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }

    return false;
};

let detalhesFilme = async (id)=>{
    let detalharFilmes = async(detalhesFilme)=>{
    fetch("http://www.omdbapi.com/?apikey=1f8c9e4&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        console.log(resp);
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(","),
        resp.Runtime,
        resp.Poster,
        resp.plot,
        resp.Director,
        resp.Actors.split(","),
        resp.awards,
        resp.imdbRating;
        //Chamar metodo para gerar card com detalhes do filme.
        //Ocultar div #lista-filmes
    });

    let mostrarFilmes = await document.querySelector("#mostrar-filmes");
    mostrarFilmes.innerHTML = "";

    mostrarFilmes.appendChild(await filme.getCardDetalhes());
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display = "none";
  };
}