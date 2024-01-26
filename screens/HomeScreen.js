import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { NavOptions } from "../components";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.imageLogo}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="A donde vas?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          autoFocus={true}
          returnKeyType={"default"}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              address: details.formatted_address,
              place_id: data.place_id,
              name: data.name,
              formatted_address: data.formatted_address,
              description: data.description,
            }))
            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          styles={
            {
              container: {
                flex: 0,
              },
              /* textInputContainer: {
                width: 300,
              }, */
              textInput: {
            
                fontSize: 20,
              },
            }
          }
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "es",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
