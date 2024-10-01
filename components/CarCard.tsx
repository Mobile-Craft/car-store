import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View, Image, Animated } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export function CarCard({ car }) {
    return (
        <Link href={`/${car.id}`} asChild
            style={[styles.cardContainer, { backgroundColor: car.color }]}>
            <Pressable>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={styles.title}>
                        {car.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.details}>
                        {car.text}
                    </Text>
                </View>
                <View style={styles.circle}>
                    <Ionicons
                        name='add'
                        size={25}
                    />
                </View>
                <Animated.Image style={[styles.image]} source={{ uri: car.imageUrl }} />
            </Pressable>
        </Link>
    );
}


export function AnimateCarCard({ car, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true
        }).start();
    }, [opacity, index])

    return (
        <Animated.View style={{ opacity }}>
            <CarCard car={car} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 190,
        marginTop: 20,
        marginBottom: 40,
        padding: 18,
        borderRadius: 28,
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    details: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400'
    },
    image: {
        width: '80%',
        height: '100%',
        top: 48,
        left: 60
    },
    circle: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 30,
        position: 'absolute',
        bottom: -20,
        left: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});