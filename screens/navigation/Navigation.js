import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PinScreen from '../PinScreen';
import RootNavigator from './RootNavigator';

const Navigation = () => {
    return (
        <>
            <NavigationContainer
            linking={LinkingConfiguration}
            theme={useColorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <RootNavigator />
            </NavigationContainer>
        </>
    )
}

export default Navigation

const styles = StyleSheet.create({})