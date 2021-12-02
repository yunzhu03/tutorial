import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from './style.module.css'


import { Icon } from 'leaflet'

const pins = [
    [40.4213,-3.7011 ],
    [21,3],
    [55, 70]
]

const pontos = [
    {city: "Madrid", author: "Luis Araújo", coordenadas: [40.4213,-3.7011 ], photo: "/photos/luis-madrid.jpg"}
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
            {pontos.map(ponto => (
            <Marker key={ponto.coordenadas} icon={markerIcon} position={ponto.coordenadas}>
                <Popup>
                    <div>
                        <h1>{ponto.city}</h1>
                        <i>{ponto.author}</i>
                        <br />
                        <img  className={styles.photo} src={ponto.photo} />
                    </div>
                </Popup>
            </Marker>
            ))}
            
        </MapContainer>
    )
}