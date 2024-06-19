const url =
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=fe6a5875b921b80be3b5317afba2cd9d";

async function getFilmes() {
    var resultado = null;
    await fetch(url)
        .then((response) => response.json())
        .then((response) => (resultado = response.results))
        .catch((error) => {
            console.log(error);
        });
        for (let index = 0; index < resultado.length; index++) {
                writeFilme(index, resultado)    
        }
}

getFilmes();

function setFilme(filme) {

    let card = `<div class="card">
            <img class="img-filme" src="${filme.img}" alt="Poster do filme: ${filme.titulo}" />
            <div class="container">
                <h3 class="titulo-filme">${filme.titulo}</h3>
                <div class="avaliacao-filme">
                    <i class="ph ph-star"></i>
                    <span class="valor-avaliacao-filme">${filme.nota}</span>
                </div>
                <p class="sinopse-filme">${filme.sinopse}</p>
                <p>${filme.index}</p>
            </div>

        </div>`    
        const container = document.querySelector("#filmes")
        container.innerHTML = container.innerHTML + card

}

function writeFilme(index, resultado) {
    let primeiroFilme = {
        titulo: null,
        img: null,
        nota: null,
        sinopse: null,
        index: null
    };

    primeiroFilme.titulo = resultado[index].title
    primeiroFilme.img = "https://image.tmdb.org/t/p/original" + resultado[index].poster_path
    primeiroFilme.nota = resultado[index].vote_average
    primeiroFilme.sinopse = resultado[index].overview
    primeiroFilme.index = index + 1
    setFilme(primeiroFilme);
    console.log(primeiroFilme)

}
