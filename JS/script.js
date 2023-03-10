/*let ator = new Ator(1, "Tom Rola");
console.log(ator);

let diretor = new Diretor(1,"Alfred");

console.log(diretor);

let direcao=[
    new Diretor(1,"lana cabeçao"),
    new Diretor(2,"zoio loko")
];

console.log(direcao);

let elenco =[
    new Ator(1,"macaco"),
    new Ator(2,"olavo"),
    new Ator(3,"roth"),
    new Ator(4,"ovo")
]

console.log(elenco);

let sino = "Um jovem (mamaco) foi parar na cidade";
let cartaz = "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg";

let genero = ["Ação", "Aventura","Ficção cientifica"];

console.log(genero, sino, cartaz);

let filme = new Filme(
    1,
    "Carros",
    2005,
    genero,
    102,
    sino,
    cartaz,
    direcao,
    elenco,
    14,
    null
);

console.log(filme);*/

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = ()=>{
    if(inputBuscarFilme.ariaValueMax.length > 0)
    {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b313db67"+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp);
        })
        console.log(inputBuscarFilme.value);
    }
    return false;
}

getCard = async() =>{
    
}