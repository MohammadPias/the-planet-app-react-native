import { View, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import SafeArea from '../components/SafeArea/SafeAreaView'
import Header from '../components/Header/Header'

export default function ItemDetails() {

    return (
        <SafeArea>
            <Header backBtn={true} />
            <Text>ItemDetails</Text>
        </SafeArea>
    )
}