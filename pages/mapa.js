import dynamic from 'next/dynamic'

export default function Mapa() {
    const Map = dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    )
    return <Map />
}