
// Set default coordinates (latitude, longitude) and zoom level
const coordinates = [50.909698, -1.404351]; // Example: London
const zoomLevel = 13;
// Initialize the map
const map = L.map('map').setView(coordinates, zoomLevel);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at the default coordinates
L.marker(coordinates).addTo(map)
    .bindPopup('This is the default location.')
    .openPopup();