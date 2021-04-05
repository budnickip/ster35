const leafletmap = () =>{

    var mymap = L.map('mapid').setView([53.427371, 14.508916], 16);
    //mymap.dragging.disable();
    //mymap.zoomControl.remove();
    mymap.scrollWheelZoom.disable();

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYnVkeW45NSIsImEiOiJja2xzNWpzb3gwdm05MnZsbHJiYmFpYXp4In0.ll8NGCRsayEEhLowbI8f8A'
    }).addTo(mymap);

    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      

    L.marker([53.427371, 14.508916], {icon: greenIcon}).addTo(mymap);

    const testmarker = document.querySelector('.leaflet-marker-icon')
    console.log(testmarker.style.transform)
}

export default leafletmap