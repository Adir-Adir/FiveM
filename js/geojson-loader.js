// Initialize the map container
var map = L.map('map', {
    crs: L.CRS.Simple, // Use Simple Coordinate Reference System for image overlays
    minZoom: -4        // Set zoom level to allow a good fit of the image
});

// Define the image bounds (you can adjust these based on your image size)
var imageBounds = [[0, 0], [1000, 1000]]; // Example bounds, you need to adjust them according to your image size

// Add the image as an overlay
var imageUrl = 'images/map.png'; // Path to your custom image
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Set the view to fit the image bounds
map.fitBounds(imageBounds);

// GeoJSON Data
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [500, 500] // Example coordinates on the image map
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
                "coordinates": [600, 700]  // Another point on the image map
            },
            "properties": {
                "name": "Point 2",
                "description": "This is Point 2",
                "img": "path_to_image2.jpg"
            }
        }
    ]
};

// Load GeoJSON data onto the image map
L.geoJSON(geojsonData, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        // Bind a popup to each feature
        layer.bindPopup(
            `<strong>${feature.properties.name}</strong><br>
             ${feature.properties.description}<br>
             <img src="${feature.properties.img}" alt="Image" width="100">`
        );
    }
}).addTo(map);
