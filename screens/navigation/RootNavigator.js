import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotFounPage from '../notFoundPage/NotFounPage'
import PinScreen from '../PinScreen';

const RootNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Pin" component={PinScreen} options={{ headerShown: false }} />


                {/* not found screen  */}
                <Stack.Screen name="NotFounPage" component={NotFounPage} options={{ title: 'opps' }} />
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen name="ModalScreen" component={ModalScreen} />
                </Stack.Group>
                {/* <Stack.Screen name="PinScreen" component={PinScreen} /> */}
            </Stack.Navigator>
        </>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})


// Bottom Tab Navigator section
const BottomTabNavigator = () => {
    return (
        <>
            <Text>Thsi is botton tab navigator</Text>
        </>
    )
}