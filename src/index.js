import 'bootstrap';
import './styles/style.scss';

import './scripts/menu.js';
import menu from './scripts/menu.js';
import contact from './scripts/contact.js';
import contactNav from './scripts/contact-nav.js';

menu()
contact()
contactNav()

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

 L.marker([53.427371, 14.508916]).addTo(mymap);