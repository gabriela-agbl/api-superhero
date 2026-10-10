let container = document.getElementById('heros-container')
let searchInput = document.getElementById('search_input')
let searchButton = document.getElementById('search_button')

const TOKEN = '3b72ec6fb6b7af1077fea181742ddc93'

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

                    const imagemUrl = `https://images.weserv.nl/?url=${encodeURIComponent(element.image.url)}&w=300&h=400&fit=cover`

                    card.innerHTML = `
                        <img src='${imagemUrl}'/>
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