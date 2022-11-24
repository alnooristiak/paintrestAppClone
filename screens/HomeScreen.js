import { FlatList, ScrollView, StyleSheet, View, } from 'react-native';
import React from 'react';
import Pin from './components/Pin';
import pins from '../assets/data/pins.ts';

const HomeScreen = () => {
  return (
      <ScrollView>
        <View style={styles.imgContainer}>
            {/* Loadding data with flatlist */}
            <FlatList
            data={pins}
            renderItem={({item}) => <Pin key={item.id} image={item.image} title={item.title} numColumns={2} ></Pin>}
            ></FlatList>
            {/* Pin image */}
        {/* <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' />
        
        <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' />
        <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' /> */}
        </View>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    imgContainer: {
        // width: '100%',
        padding: 10,
        // flex: 1,
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirecton: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
    },
})