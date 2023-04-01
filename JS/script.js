let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");

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

let detalhesFilme = async (id)=>{
    fetch("https://www.omdbapi.com/?apikey=1f8c9e4&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        console.log(resp);
        let genre = resp.Genre ? resp.Genre.split(",") : [];
        let actors = resp.Actors ? resp.Actors.split(",") : [];
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            genre,
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            actors,
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
            
            if (filmes.some(filmeTest => filmeTest.id === filme.id)) {
                alert("O FILME JÁ ESTÁ NA LISTA DE FAVORITOS!");
                return;
            }
            
            filmes.push(filme);
            localStorage.setItem('filmesFav', JSON.stringify(filmes));
            alert("FILME ADICIONADO COM SUCESSO NA LISTA DE FAVORITOS!")
        }

        document.querySelector("#btnDesfav").onclick=()=>{
            let filmes = [];
            let filmeString = localStorage.getItem('filmesFav');

            if (!filme) {
                alert("SELECIONE UM FILME PARA REMOVER DA LISTA DE FAVORITOS!.");
            } else if (!filmeString) {
                alert("O FILME NÃO ESTÁ NA LISTA PARA SER REMOVIDO!");
            } else {
                filmes = JSON.parse(filmeString);

            const remover = filmes.findIndex(filmeDes => filmeDes.id === filme.id);

            if (remover === -1) {
                alert("O FILME NÃO ESTÁ NA LISTA DE FAVORITOS!");
            } else {
            filmes.splice(remover, 1);
            localStorage.setItem('filmesFav', JSON.stringify(filmes));
            alert("O FILME FOI RETIRADO DOS FAVORITOS!");
                }
            }     
        };

        document.querySelector("#btnEditar").onclick=()=>{
            let filmesString = localStorage.getItem('filmesFav');
            let filmes = [];
        
            if (!filmesString) {
                alert("Não há filmes favoritos armazenados.");
                return;
            }
        
            filmes = JSON.parse(filmesString);
        
            if (filmes.length === 0) {
                alert("Não há filmes favoritos armazenados.");
                return;
            }
        
            let filmeSelecionado = prompt("Digite o título do filme que deseja editar(as edições serão mostradas na aba de filmes favortivos):");
            let filmeIndex = filmes.findIndex(filme => filme.titulo === filmeSelecionado);
        
            if (filmeIndex === -1) {
                alert("Não foi possível encontrar o filme selecionado.");
                return;
            }
        
            let novoTitulo = prompt("Digite o novo título do filme:");
            let novoAno = prompt("Digite o novo Ano do filme:");
            let novoGenero = prompt("Digite o novo gênero do filme:");
            let novoPremio = prompt("Digite os novos premios do filme:");
        
            filmes[filmeIndex].titulo = novoTitulo;
            filmes[filmeIndex].ano = novoAno;
            filmes[filmeIndex].genero = novoGenero;
            filmes[filmeIndex].classi = novoPremio;
        
            localStorage.setItem('filmesFav', JSON.stringify(filmes));
        
            alert("Filme editado com sucesso, caso queira desfazer as edições é só remover da lista de favoritos!");
        
            console.log(JSON.parse(localStorage.getItem('filmesFav')))
            detalhesFilme(filmes[filmeIndex].id);
        };
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



