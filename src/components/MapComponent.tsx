// MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
    const position = [8.4799, 4.5370]; // Ilorin coordinates

    return (
        <div className="h-[500px] w-full rounded-lg shadow-lg overflow-hidden">
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div className="text-sm font-semibold text-gray-700">
                            9 Olatinwo Plaza, Opp. St. Charles Nursery & Primary School,
                            Offa Garage, Ilorin, Kwara State, Nigeria
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
