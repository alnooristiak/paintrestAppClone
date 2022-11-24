import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Pin = (props) => {

    const [ratio, setRatio] = useState(1);

    const { image, title } = props;

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image])

    return (
        <View style={styles.imgPin}>
            <View>
                <Image style={[styles.bannerImg, {aspectRatio: ratio}]} source={{ uri: image }} />
                {/* hert icon section start */}
                <Pressable 
                // onPress={}
                style={styles.hertIcon}
                >
                    <AntDesign name="heart" size={24} color="red" />
                </Pressable>
                {/* hert icon section End */}
            </View>
            <Text style={styles.bottomText}>{title}</Text>
        </View>
    )
}

export default Pin

const styles = StyleSheet.create({
    imgPin: {
        width: '100%',
    },
    bannerImg: {
        width: '100%',
        // height: 200,
        aspectRatio: 2/1,
        borderRadius: 15,
        // position: 'relative'
    },
    bottomText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 19,
    },
    hertIcon: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        backgroundColor: 'yellow',
        padding: 8,
        borderRadius: 19,
    },
})