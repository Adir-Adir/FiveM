// Initialize the map and set its view to some geographical coordinates and a zoom level
var map = L.map('map').setView([34.0522, -118.2437], 10); // Coordinates for Los Angeles, for example

// Set up the OpenStreetMap tiles (this acts as the base map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// GeoJSON Data
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-118.2437, 34.0522]  // Coordinates for Los Angeles
            },
            "properties": {
                "name": "Point 1",
                "description": "This is Point 1",
                "img": "path_to_image.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-118.2937, 34.0722]  // Another point
            },
            "properties": {
                "name": "Point 2",
                "description": "This is Point 2",
                "img": "path_to_image2.jpg"
            }
        }
    ]
};

// Load GeoJSON data onto the map
L.geoJSON(geojsonData, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to each feature
        layer.bindPopup(
            `<strong>${feature.properties.name}</strong><br>
             ${feature.properties.description}<br>
             <img src="${feature.properties.img}" alt="Image" width="100">`
        );
    }
}).addTo(map);
