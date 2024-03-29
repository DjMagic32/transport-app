import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { Map, NavigateCard, RideOptionsCard } from '../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard" 
            component={NavigateCard}
            options={{
              headerShown: false
            }} 
          />
           <Stack.Screen 
            name="RideOptionsCard" 
            component={RideOptionsCard}
            options={{
              headerShown: false
            }} 
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({})