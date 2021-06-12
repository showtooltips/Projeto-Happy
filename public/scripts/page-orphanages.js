// Tipos de Dados:
// String ""
//Number 01
// Object {}
//Boolean true or false
// Array []


//Create map
const map = L.map(
    'mapid'
).setView(
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

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker
L
    .marker([-19.3906054,-40.074377], { icon })
    .addTo(map)
    .bindPopup(popup)
    .openPopup();