import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Mock sensor data for water level sensors across Bangladesh
const sensorData = [
  { id: 1, location: [23.8103, 90.4125], waterLevel: 5.2 }, // Dhaka
  { id: 2, location: [22.8456, 89.5403], waterLevel: 6.5 }, // Khulna
  { id: 3, location: [24.3636, 88.6241], waterLevel: 4.8 }, // Rajshahi
  { id: 4, location: [24.9036, 91.8736], waterLevel: 7.0 }, // Sylhet
];

// Mock polygon coordinates for a flood-prone area
const floodProneArea = [
  [23.8103, 90.4125], // Dhaka area
  [23.8070, 90.4281],
  [23.8186, 90.4341],
  [23.8120, 90.4155],
];

// Mock safe zone location
const safeZone = [23.6850, 90.3563]; // Central safe zone in Dhaka

const FloodMap = () => {
  return (
    <MapContainer center={[23.6850, 90.3563]} zoom={7} style={{ height: "600px", width: "100%" }}>
      {/* OpenStreetMap tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Display sensor markers */}
      {sensorData.map((sensor) => (
        <Marker key={sensor.id} position={sensor.location}>
          <Popup>
            <strong>Sensor ID:</strong> {sensor.id} <br />
            <strong>Water Level:</strong> {sensor.waterLevel} meters
          </Popup>
        </Marker>
      ))}

      {/* Display flood-prone area as a red polygon */}
      <Polygon positions={floodProneArea} color="red">
        <Popup>Flood-Prone Area</Popup>
      </Polygon>

      {/* Display safe zone marker */}
      <Marker position={safeZone}>
        <Popup>
          <strong>Safe Zone</strong>: Central Dhaka
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default FloodMap;