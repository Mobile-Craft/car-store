import { Link, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Screen from '../components/Screen';
import { useEffect, useState } from 'react';
import { CARS, CarType } from '../lib/Cars';


export default function Details() {

    const { carId } = useLocalSearchParams();
    const [carInfo, setCarInfo] = useState<CarType | null>(null);

    useEffect(() => {
        if (carId) {
            const id = Number(carId);
            const car = CARS.find(item => item.id === id) || null;
            setCarInfo(car)
        }
    }, [carId])

    return (
        <View style={styles.container}>
            {carInfo === null ? (<ActivityIndicator />)
                : (
                    <>
                        <Image source={{ uri: carInfo.imageUrl }} style={styles.image} />
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{carInfo.title}</Text>
                            <Text numberOfLines={1}>{carInfo.text}</Text>
                        </View>
                        <View style={styles.containerVelocity}>
                            <Text style={styles.titleVelocity}>300</Text>
                            <Text style={styles.detailsVelocity}>300</Text>
                            <Text style={styles.titleVelocity}>300</Text>
                            <Text style={styles.detailsVelocity}>300</Text>
                        </View>
                        <Text style={styles.titleSection}>
                            Motor
                        </Text>
                        <View>

                        </View>
                    </>
                )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 16
    },
    containerText: {
        width: '55%',
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    image: {
        width: 400,
        height: 200,
        position: 'absolute',
        top: 60,
        right: 100
    },
    containerVelocity: {
        width: 100,
        height: 200,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    titleVelocity: {
        fontSize: 28,
        color: 'black',
        paddingTop: 30
    },
    detailsVelocity: {
        fontSize: 14,
        color: 'black',
    },
    titleSection: {
        fontSize: 23,
        color: 'black',
        paddingTop: 15
    },

});
