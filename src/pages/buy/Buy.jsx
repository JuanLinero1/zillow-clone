import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Data } from "../../../public/assets/realStateInfo";
import CardBuy from "./components/CardBuy";

const Buy = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 13.24121,
    lng: 80.1323,
  });

  const containerStyle = {
    width: "40rem",
    height: "100vh",
  };

  const center = { lat: coordinates.lat, lng: coordinates.lng };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_MAP_KEY,
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const myLatLng = { lat: coordinates.lat, lng: coordinates.lng };

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "house",
    });

    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <section className="buy">
      <nav className="buy__header"></nav>
      <div className="buy__content">
        <div className="buy__content--map">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
        <CardBuy data={Data} setCoordinates={setCoordinates} />
      </div>
    </section>
  );
};

export default Buy;
