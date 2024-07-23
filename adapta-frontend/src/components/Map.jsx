import React, { useState } from 'react'
import "../style.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents  } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const Map = () => {

  const [markers, setMarkers] = useState([]);
  const provider = new OpenStreetMapProvider();

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        const results = await provider.search({ query: `${lat}, ${lng}` });

        if (results && results.length > 0) {
          const locationName = results[0].label;
          console.log(`Location: ${locationName}`);

          setMarkers([...markers, { lat, lng, locationName }]);
        } else {
          console.log(`Coordinates: (${lat}, ${lng}) - No location found`);
          setMarkers([...markers, { lat, lng, locationName: `Coordinates: (${lat}, ${lng})` }]);
        }
      },
    });

    return null;
  };

  const handleMarkerClick = (index) => {
    setMarkers(markers.filter((_, i) => i !== index));
  };

  return (
    <MapContainer center={[-0.2456874990072913, 37.63907613354113]} zoom={43}>
        <TileLayer 
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        <TileLayer 
          // attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
          url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        />

        {/* <Marker position={[-0.2456874990072913, 37.63907613354113]}>
          <Popup>
            Ocha
          </Popup>
        </Marker> */}

        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={[marker.lat, marker.lng]}
            eventHandlers={{
              click: () => {
                handleMarkerClick(index);
              },
              mouseover: (e) => {
                e.target.openPopup();
              },
              mouseout: (e) => {
                e.target.closePopup();
              },
            }}
          >
            <Popup>
              {marker.locationName}
            </Popup>
          </Marker>
        ))}
        <MapClickHandler />
    </MapContainer>
  )
}

export default Map