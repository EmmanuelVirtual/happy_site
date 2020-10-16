const map = L.map('mapid').setView([-17.5420368,-39.7463134], 15);


//create add add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 
    popupAnchor: [170, 2]
})

//create popup

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')



//create and add marker 
L
.marker([-17.5420368,-39.7463134,], { icon })
.addTo(map)
.bindPopup(popup)
