import { ScrollView, StyleSheet, View, } from 'react-native'
import React from 'react'
import Pin from './components/Pin'

const HomeScreen = () => {
  return (
      <ScrollView>
        <View style={styles.imgContainer}>
            {/* Pin image */}
        <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' />
        
        <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' />
        <Pin image={'https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_640.jpg'} title='title' />
        </View>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    imgContainer: {
        width: '100%',
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})