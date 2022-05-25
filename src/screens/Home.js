import React from 'react'
import Text from '../components/Text/Text'
import { colors } from '../theme/colors'
import Header from '../components/Header/Header'
import SafeArea from '../components/SafeArea/SafeAreaView'
import { View, FlatList, StyleSheet, Pressable } from 'react-native'
import { planetData } from '../data/data'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <SafeArea>
            <Header />
            <FlatList
                contentContainerStyle={{ padding: spacing[4] }}
                data={planetData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('Details', { planet: item })}
                            style={styles.item}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.circle, { backgroundColor: item.color }]}></View>
                                <Text style={styles.itemText} preset='h4'>{item.name}</Text>
                            </View>
                            <AntDesign name="right" size={24} color={colors.gray} />
                        </Pressable>
                    )
                }}
            />
        </SafeArea>
    )
}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: colors.gray,
        padding: spacing[4]
    },

    circle: {

        height: 25,
        width: 25,
        borderRadius: 12.5,

    },
    itemText: {
        textTransform: 'uppercase',
        marginLeft: spacing[5]
    }
})