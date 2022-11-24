import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import pins from '../assets/data/pins'
import { AntDesign } from '@expo/vector-icons';

const PinScreen = () => {
    const pin = pins[1];

    const [ratio, setRatio] = useState(1);

    useEffect(() => {
        if (pin.image) {
            Image.getSize(pin.image, (width, height) => setRatio(width / height));
        }
    }, [pin])

  return (
    <View style={styles.pinMsec}>
        <Image style={[styles.pinImg, {aspectRatio: ratio}]} source={{uri : pin.image}} />
        <Pressable>
            <AntDesign name="left" size={24} color="white" />
        </Pressable>
        <Text style={styles.pinTitle}>{pin.title}</Text>
    </View>
  )
}

export default PinScreen

const styles = StyleSheet.create({
    pinMsec: {
        // padding: 10,
    },
    pinImg: {
        width: '100%',
        // height: 50,
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
    },
    pinTitle: {
        padding: 8,
        textAlign: 'center',
        fontSize: 16,
    },
})