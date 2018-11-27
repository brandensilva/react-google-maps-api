// eslint-disable-next-line filenames/match-exported
import React from 'react'
// import PropTypes from 'prop-types'
import Layout from '../components/layout'
import indexStyles from './index.module.css'

import {
  GoogleMapProvider,
  GoogleMap
  // Circle,
  // Marker
  // Polyline,
  // Polygon,
  // Rectangle,
  // InfoWindow,
  // OverlayView,
  // GroundOverlay,
  // DirectionsRenderer,
  // FusionTablesLayer,
  // KmlLayer,
  // TrafficLayer,
  // StreetViewPanorama,
  // BicyclingLayer,
  // compose
} from 'react-google-maps-api'

// import MapWithASearchBox from '../components/search-box'
// import PlacesWithStandaloneSearchBox from '../components/standalone-search-box'

// Past your GoogleMaps API key here
// You can obtain the API key here:
// https://developers.google.com/maps/documentation/javascript/get-api-key
import { googleMapsApiKey } from '../const'

const style = {
  maxWidth: '300px',
  marginBottom: '1.45rem'
}

const defaultCenter = {
  lat: -34.397,
  lng: 150.644
}

// const position = {
//   lat: -34.397,
//   lng: 150.644
// }

const loadingStyle = {
  height: `100%`,
  backgroundColor: '#023456'
}

const mapContainerStyle = {
  height: `400px`,
  width: `800px`
}

const Loading = (
  <div
    style={loadingStyle}
  />
)

const IndexPage = () => (
  <Layout>
    <h1>Hello People!</h1>
    <p>Welcome to React Google Maps Light Example.</p>

    <div style={style}>
      <GoogleMapProvider
        googleMapsApiKey={googleMapsApiKey}
        language={'en'}
        region={'EN'}
        version={'weekly'}
        loadingElement={Loading}
      >
        <GoogleMap
          defaultZoom={8}
          defaultCenter={defaultCenter}
          mapContainerStyle={mapContainerStyle}
          mapContainerClassName={indexStyles.mapContainer}
          onClick={(...args) => {
            console.log('onClick args: ', args)
          }}
        />
      </GoogleMapProvider>
    </div>
  </Layout>
)

export default IndexPage