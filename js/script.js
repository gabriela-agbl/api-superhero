let container = document.getElementById('heros-container')
let searchInput = document.getElementById('search_input')
let searchButton = document.getElementById('search_button')

const TOKEN = '3b72ec6fb6b7af1077fea181742ddc93'

const IMAGENS_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md'

const IMAGEM_RESERVA = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400">' +
    '<rect width="100%" height="100%" fill="#222"/>' +
    '<text x="50%" y="50%" fill="#ea00ff" font-size="22" text-anchor="middle" font-family="sans-serif">Sem imagem</text>' +
    '</svg>'
)

function montarImagem(heroi){
    const slug = heroi.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return `${IMAGENS_URL}/${heroi.id}-${slug}.jpg`
}


function buscarHeroi(nomeBusca){
    fetch(`https://superheroapi.com/api.php/${TOKEN}/search/${nomeBusca}`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)

            container.innerHTML = ''

            if (data.response === 'success'){
                data.results.forEach(element =>{
                    const card = document.createElement('div')

                    card.className = 'card'

                    const imagemUrl = montarImagem(element)

                    card.innerHTML = `
                        <img src="${imagemUrl}" alt="${element.name}" referrerpolicy="no-referrer"
                             onerror="this.onerror=null; this.src='${IMAGEM_RESERVA}'"/>
                        <h2>${element.name}</h2>
                        <p>Raça: ${element.appearance.race}</p>
                        <p>Gênero: ${element.appearance.gender}</p>
                        <p>Poder: ${element.powerstats.power}</p>
                    `
                    container.appendChild(card)
                })
            } else {
                container.innerHTML = `<p>Herói não encontrado</p>`
            }
        })
        .catch((err) =>{
            console.log(err)
        })
}

searchButton.addEventListener('click', () => {
    let termo = searchInput.value.trim();
    if (termo !== "") {
        buscarHeroi(termo);
    }
});

window.addEventListener('DOMContentLoaded', () =>{
    buscarHeroi('Batman');
})