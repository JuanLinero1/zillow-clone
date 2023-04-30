import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Buy = () => {
  const containerStyle = {
    width: '40rem',
    height: '100vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_REACT_MAP_KEY
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <section className='buy'>
      <nav className='buy__header'>
        <div className="buy__header--container">
          <form className="buy__header--container-form">
            <input type="text" />
          </form>
        </div>
        <div className="buy__header--container">
          <h4></h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </nav>
      <div className="buy__map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
      <div className="buy__product"></div>
    </section>
  )
}

export default Buy