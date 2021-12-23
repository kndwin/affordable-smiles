import { memo } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: -33.81462856892629,
  lng: 151.00008565528896
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDcxdlKvrLuPGsl6gNkfE-sPeft3GoOYDo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default memo(Map)
