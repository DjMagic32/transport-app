import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from'react-native-maps';
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin.location.lat, origin.location.lng );

  return (
    <MapView
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title={origin.name}
          description={origin.description}
          identifier='Destino'
        />
      )}

    </MapView>
  )
}

const styles = StyleSheet.create({})