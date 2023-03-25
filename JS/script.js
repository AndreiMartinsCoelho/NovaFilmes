let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");
let filmesFavoritos = 

btnBuscarFilme.onclick = async ()=>{
    if(inputBuscarFilme.value.length > 0)
    {
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=1f8c9e4&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    item.Genre,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    item.Awards,
                    null
                );
                filmes.push(filme);

            });


            listarFilmes(filmes);
        });

    }
    return false;

};

let detalhesFilme = async (id)=>{
    fetch("https://www.omdbapi.com/?apikey=1f8c9e4&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );
        console.log(filme);
        
        let listaFilmes = document.querySelector("#lista-filmes");
        listaFilmes.innerHTML="";
        let detalheFilmes = document.querySelector("#mostrar-filme");
        detalheFilmes.innerHTML="";
        
        detalheFilmes.appendChild(filme.getCardDetalhes());
        console.log(detalheFilmes);

        document.querySelector("#btnFechar").onclick=()=>{
            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").innerHTML="";
        }
        document.querySelector("#btnSalvar").onclick=()=>{

            let filmeString = localStorage.getItem('filmesFav');
            let filmes = [];
          
            if (filmeString) {
              filmes = JSON.parse(filmeString);
            }
            
            filmes.push(filme);

            localStorage.setItem('filmesFav', JSON.stringify(filmes));
        }

    });

    return false;
};

let listarFilmes = async(filmes)=>{
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML="";
    let detalheFilmes = document.querySelector("#mostrar-filme");
    detalheFilmes.innerHTML="";
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

function listarFavoritos() {
    
      const filmesFav = JSON.parse(localStorage.getItem('filmesFav'));
      const filmesFavoritos = [];
  
      filmesFav.forEach((item) => {
        const filme = new Filme(
        item.id,
        item.titulo,
        item.ano,  
        item.genero,
        null,
        null,
        item.cartaz,
        null,
        null,
        item.classi,
        null
    );
        filmesFavoritos.push(filme);
    });
  
    listarFilmes(filmesFavoritos);
  }
  

navFavoritos.onclick = () => {
  listarFavoritos();
};



