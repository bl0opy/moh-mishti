// ========================================
// Locations Page - Map and Location Cards
// ========================================

let map;
const chicagoCenter = [41.8781, -87.6298]; // Chicago coordinates

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadLocations();
});

// Load locations from JSON file
async function loadLocations() {
    try {
        const response = await fetch('locations.json');
        const locations = await response.json();

        initMap(locations);
        renderLocationCards(locations);
    } catch (error) {
        console.error('Error loading locations:', error);
    }
}

// Initialize Leaflet map
function initMap(locations) {
    // Create map centered on Chicago
    map = L.map('map').setView(chicagoCenter, 11);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Add markers for each location
    locations.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);

        // Create popup content
        const popupContent = `
            <div style="min-width: 200px;">
                <h3 style="margin: 0 0 0.5rem 0; color: #2C2C2C; font-size: 1.1rem;">${location.name}</h3>
                <p style="margin: 0; color: #666; font-size: 0.9rem;">${location.address}</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}"
                   target="_blank"
                   style="display: inline-block; margin-top: 0.5rem; color: #D4AF37; text-decoration: none; font-weight: 600;">
                   Get Directions →
                </a>
            </div>
        `;

        marker.bindPopup(popupContent);

        // Open first marker by default
        if (index === 0) {
            marker.openPopup();
        }
    });
}

// Render location cards
function renderLocationCards(locations) {
    const container = document.getElementById('locations-list');

    locations.forEach(location => {
        const card = createLocationCard(location);
        container.appendChild(card);
    });
}

// Create individual location card
function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = 'location-card';

    // Generate Google Street View image URL
    const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x300&location=${location.lat},${location.lng}&fov=90&heading=0&pitch=0&key=YOUR_API_KEY`;

    // Use a placeholder that shows the location name
    const placeholderUrl = `https://via.placeholder.com/400x300/8B7BA8/FFFFFF?text=${encodeURIComponent(location.name)}`;

    card.innerHTML = `
        <div class="location-image" style="background: linear-gradient(135deg, #E6D5F5, #D4AF37); display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
            📍
        </div>
        <div class="location-info">
            <h3>${location.name}</h3>
            <p><strong>📍 Address:</strong><br>${location.address}</p>
            <div style="margin-top: 1.5rem;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}"
                   target="_blank"
                   class="cta-button"
                   style="display: inline-block; padding: 0.8rem 1.5rem; font-size: 0.9rem; text-decoration: none;">
                   Get Directions
                </a>
            </div>
        </div>
    `;

    // Add click event to zoom to location on map
    card.addEventListener('click', () => {
        map.setView([location.lat, location.lng], 15);

        // Find and open the corresponding marker popup
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                const markerLatLng = layer.getLatLng();
                if (markerLatLng.lat === location.lat && markerLatLng.lng === location.lng) {
                    layer.openPopup();
                }
            }
        });

        // Smooth scroll to map
        document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    return card;
}

// Add hover effect cursor
const style = document.createElement('style');
style.textContent = `
    .location-card {
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .location-card:hover {
        transform: translateY(-5px) scale(1.02);
    }

    .leaflet-popup-content {
        margin: 1rem;
    }

    .leaflet-popup-content h3 {
        margin-top: 0;
    }
`;
document.head.appendChild(style);
