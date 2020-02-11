// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let L = require('leaflet');
let { FeatureGridLayer } = require('ginkgoch-leaflet-extensions');
let mapEngine = require('./src/maps')();

function main() {
    let map = L.map('mapContainer').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    new FeatureGridLayer(mapEngine).addTo(map);
}

main();
