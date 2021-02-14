// create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 13);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos field
function addPhotoField() {
    // get photos container #images
    const container = document.querySelector('#images');
    // get container and duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // clear the field before adding it to the image container
    console.log(newFieldContainer.children);

    // add clone to container #images
    container.appendChild(newFieldContainer);
}