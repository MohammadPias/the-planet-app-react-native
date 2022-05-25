import { View, Pressable, Image, StyleSheet, Linking, ScrollView } from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import SafeArea from '../components/SafeArea/SafeAreaView'
import Header from '../components/Header/Header'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'

export default function ItemDetails({ route }) {
    const planet = route.params.planet;

    const PlanetInfo = ({ title, value }) => {
        return (
            <View style={styles.PlanetInfo}>
                <Text>{title}</Text>
                <Text>{value}</Text>
            </View>
        )
    }

    return (
        <SafeArea>
            <Header backBtn={true} />
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.imageView}
                        source={{ uri: planet.photoUrl }} />
                </View>
                <Text preset='h2' style={styles.planetName}>{planet.name}</Text>
                <Text style={styles.planetDes}>{planet.description}</Text>
                <Pressable
                    onPress={() => Linking.canOpenURL(planet.wikiLink).then(() => {
                        Linking.openURL(planet.wikiLink);
                    })}
                    style={styles.PlanetSource}
                >
                    <Text preset='h4' style={{ color: colors.gray }}>Source :</Text>
                    <Text preset='h4' style={{
                        textDecorationLine: "underline",
                        marginLeft: spacing[3]
                    }}>Wikipedia</Text>
                </Pressable>
                <PlanetInfo title='Rotation Time' value={planet.rotationTime} />
                <PlanetInfo title='Revolution Time' value={planet.revolutionTime} />
                <PlanetInfo title='Radius' value={planet.radius} />
                <PlanetInfo title='Avarage Temparature' value={planet.avgTemp} />
            </ScrollView>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    imageView: {
        // marginLeft: spacing[12],
        marginTop: spacing[10],
        width: 250,
        height: 250,
    },
    planetName: {
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: spacing[10],
    },
    planetDes: {
        textAlign: 'center',
        paddingHorizontal: spacing[10],
    },
    PlanetSource: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing[5],
    },
    PlanetInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: spacing[5],
        marginTop: spacing[5],
        borderColor: colors.gray,
        borderWidth: .6,
        paddingVertical: spacing[4],
        paddingHorizontal: spacing[5],
    },
})