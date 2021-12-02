import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import { Icon } from 'leaflet'

const pins = [
    [40, 2],
    [21,3],
    [55, 70]
]

export default function Map() {
    const markerIcon = new Icon({
        iconUrl: "/pin.png", iconSize: [25, 25], iconAnchor: [12, 41]
    })
    return (
        <MapContainer center={[40, 0]} zoom={5} scrollWheelZoom={false} style={{ height: 500 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pins.map(pin => (
                <Marker icon={markerIcon} position={pin}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  <img src="/pin.png" />
                </Popup>
            </Marker>
            ))}
            
        </MapContainer>
    )
}