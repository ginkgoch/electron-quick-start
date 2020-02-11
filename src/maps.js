let path = require('path');
let G = require('ginkgoch-map').default.all;

function getMapEngine() {
    let mapEngine = new G.MapEngine();
    let featureSource = new G.ShapefileFeatureSource(path.resolve(__dirname, '../data/world.shp'));
    let featureLayer = new G.FeatureLayer(featureSource);
    featureLayer.styles.push(new G.FillStyle('rgba(255, 153, 128, 0.6)', 'black', 1));

    mapEngine.pushLayer(featureLayer);
    return mapEngine;
}

module.exports = getMapEngine;