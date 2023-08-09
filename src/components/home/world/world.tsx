import React, { forwardRef, useEffect, useRef, useState } from 'react'
import mapTexture from '@/assets/map.png'
import { GlobeMethods } from 'react-globe.gl'
import dynamic from 'next/dynamic'

interface Location {
  width?: number
  height?: number
}

// Função para gerar coordenadas aleatórias
const generateRandomCoordinates = () => ({
  lat: Math.random() * 180 - 90, // gera uma latitude entre -90 e 90
  lng: Math.random() * 360 - 180, // gera uma longitude entre -180 e 180
})

const GlobeWithNoSSR = dynamic(
  () =>
    import('react-globe.gl').then((mod) => {
      const Globe = mod.default
      const GlobeWithRef = forwardRef<GlobeMethods | null, any>(
        (props, ref) => {
          const globeEl = useRef<GlobeMethods>()

          // Aqui você pode usar useEffect.
          useEffect(() => {
            if (globeEl.current) {
              globeEl.current.controls().autoRotate = true
              globeEl.current.controls().autoRotateSpeed = 2
              globeEl.current.controls().enableZoom = false
            }
          }, [globeEl])

          return <Globe ref={globeEl} {...props} />
        },
      )
      GlobeWithRef.displayName = 'GlobeWithRef'
      return GlobeWithRef
    }),
  { ssr: false },
)

const World = ({ width = 1300, height = 1300 }: Location) => {
  const data = Array.from({ length: 12 }, () => {
    const start = generateRandomCoordinates()
    const end = generateRandomCoordinates()

    return {
      startLat: start.lat,
      startLng: start.lng,
      endLat: end.lat,
      endLng: end.lng,
      color: [
        [
          '#FF0000',
          '#FF4500',
          '#FF7F50',
          '#40E0D0',
          '#1E90FF',
          '#0000FF',
          '#8A2BE2',
          '#FF00FF',
        ][Math.round(Math.random() * 7)],
        [
          '#FF0000',
          '#FF4500',
          '#FF7F50',
          '#40E0D0',
          '#1E90FF',
          '#0000FF',
          '#8A2BE2',
          '#FF00FF',
        ][Math.round(Math.random() * 7)],
      ],
    }
  })

  const [countries, setCountries] = useState({ features: [] })

  useEffect(() => {
    // load data
    fetch(
      'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson',
    )
      .then((res) => res.json())
      .then(setCountries)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        right: -150,
        top: -230,
        transform: 'rotate(45deg)',
      }}
    >
      <GlobeWithNoSSR
        globeImageUrl={mapTexture.src}
        backgroundColor="rgba(0,0,0,0)"
        arcsData={data}
        arcColor={'color'}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcAltitude={() => 0.5}
        arcDashAnimateTime={() => 5000}
        hexPolygonsData={countries.features}
        hexPolygonMargin={0.5} // d6iminuir para polígonos menores
        hexPolygonColor={() => `#009ed88b`}
        width={width}
        height={height}
        animateIn={true}
      />
    </div>
  )
}

export default World
