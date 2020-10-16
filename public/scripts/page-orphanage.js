const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scroollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([-17.5420368,-39.7463134], 15);


//create add add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 

})


//create and add marker 
L
.marker([-17.5420368,-39.7463134,], { icon })
.addTo(map)


/* galery image*/

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(){
        button.classList.remove("active")

    }

    //selecionar a imagem marker
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container img
    imageContainer.src = image.src

    // adicionar classe .active
    button.classList.add('active')

}
