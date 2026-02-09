import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import styles from './BusinessMap.module.css';

// Fix for default marker icons in Leaflet with Webpack/Next.js
if (typeof window !== 'undefined') {
    const DefaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });
    L.Marker.prototype.options.icon = DefaultIcon;
}

function MapResizer({ businesses }) {
    const map = useMap();

    useEffect(() => {
        if (businesses.length > 0) {
            const bounds = L.latLngBounds(businesses.map(b => [b.lat, b.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [businesses, map]);

    return null;
}

export default function BusinessMap({ businesses = [] }) {
    if (businesses.length === 0) return null;

    // Default center to Baton Rouge if no businesses
    const center = businesses.length > 0
        ? [businesses[0].lat, businesses[0].lng]
        : [30.4515, -91.1871];

    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={false}
                className={styles.mapContainer}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {businesses.map((business) => (
                    <Marker
                        key={business.id}
                        position={[business.lat, business.lng]}
                    >
                        <Popup>
                            <div className={styles.popupContent}>
                                <div className={styles.popupHeader}>
                                    <span className={styles.popupIcon}>{business.image}</span>
                                    <h3 className={styles.popupTitle}>{business.name}</h3>
                                </div>
                                <p className={styles.popupCategory}>{business.category}</p>
                                <p className={styles.popupAddress}>{business.address}</p>
                                <div className={styles.popupRating}>
                                    {'★'.repeat(Math.floor(business.rating))}
                                    <span> ({business.reviews} reviews)</span>
                                </div>
                                <button className={styles.popupButton}>View Details</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <MapResizer businesses={businesses} />
            </MapContainer>
        </div>
    );
}
