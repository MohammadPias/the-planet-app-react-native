import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../Text/Text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Header({ backBtn, title = "THE PLANET" }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                backBtn && (
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={40} color="white" />
                    </Pressable>
                )
            }
            <Text preset='h1'>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing
        [4],
        borderBottomWidth: .5,
        borderBottomColor: colors.white,
    }
})