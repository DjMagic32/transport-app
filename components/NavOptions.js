import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapSreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsSreen",
  },
];

export const NavOptions = () => {
  return (
    <FlatList
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => (
        <TouchableOpacity
         style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded`}
        >
            <View>
                <Image
                style={styles.imageList}
                source={{uri: item.image}} 
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                  style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                  name="east"
                  color='white'
                  type='antdesing'
                />
            </View>
        </TouchableOpacity>
     )}
    >
    </FlatList>
  )
}

const styles = StyleSheet.create({
    imageList: {
        width: 120,
        height: 120,
        resizeMode: 'contain' 
    }
})