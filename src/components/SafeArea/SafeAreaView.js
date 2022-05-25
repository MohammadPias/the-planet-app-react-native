import React from 'react'
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import { colors } from '../../theme/colors';

export default function SafeArea({ children }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea} >
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});