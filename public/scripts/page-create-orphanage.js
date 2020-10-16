const map = L.map('mapid').setView([-17.5420368,-39.7463134], 15);


//create add add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 

})


let marker;

//create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=LNG]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)


    // add mark layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//add field photo

function addPhotoField(){
   // pegar container de fotos #images
   const container = document.querySelector('#images') 
   //pegar contaier para duplicar .new-image
   const fieldsContainer = document.querySelectorAll('.new-upload')
   // realizar o clone da última imagem adicionada
   const newfieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newfieldContainer.children[0]

    if(input.value == ""){
        return
    }
   //limpar o campo antes de adicionar ao container de imagens
   input.value = ""

   //adcionar ao container de #images
   container.appendChild(newfieldContainer)
}

function deleteField(event){
        const span = event.currentTarget

        const fieldsContainer = document.querySelectorAll('.new-upload')

        if(fieldsContainer.length <= 1){
            // limpar o valor do campo
            span.parentNode.children[0].value = ""
            return
        }

        //deletar o campo
        span.parentNode.remove();
}

//troca do sim e não

function toggleSelect(event){
    //retirar a classe .active(dos botões)
    document.querySelectorAll('button-select button')
    
    .forEach(button => button.classList.remove('active'))

    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekdns"]')

    input.value = button.dataset.value
}




