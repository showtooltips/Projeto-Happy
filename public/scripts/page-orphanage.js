// Tipos de Dados:
// String ""
//Number 01
// Object {}
//Boolean true or false
// Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView(
        [-19.3906054,-40.074377], 15);

//Create tilelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create and add marker
L
    .marker([-19.3906054,-40.074377], { icon })
    .addTo(map)

    /* image gallery */

    function selectImage(event) {
        const button = event.currentTarget

        //remover todas as classes .active
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button) {
            button.classList.remove("active")
        }

        //selecionar a imagem clicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        //atualizar o container de image
        imageContainer.src = image.src

        //adicionar a classe .active para este botão
        button.classList.add('active')
    }
