import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { NavOptions } from '../components';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.imageLogo}
          source={{
            uri: "https://links.papareact.com/gzs",
          }} 
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})