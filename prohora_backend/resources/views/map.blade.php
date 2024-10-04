<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flood Map for Bangladesh</title>

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

    <style>
        html, body {
            height: 100%;
            margin: 0;
        }

        #map {
            height: 100vh; 
            width: 100vw;  
        }
    </style>
</head>
<body>
    <div id="map"></div>

    
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <script>
        //map to Bangladesh (latitude, longitude, zoom level)
        var map = L.map('map').setView([23.6850, 90.3563], 8);

        //OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

       
        fetch('/get-flood-data')
            .then(response => response.json())
            .then(data => {
                data.forEach(event => {
                    // adding markers to the map for each flood event
                    var marker = L.marker([event.location.lat, event.location.lon]).addTo(map);
                    marker.bindPopup(`<h3>Flood Alert</h3><p>Location: ${event.location.name}</p><p>Water level: ${event.water_level}</p>`);
                });
            })
            .catch(error => console.error('Error fetching flood data:', error));
    </script>
</body>
</html>
