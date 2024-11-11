import { Link, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Alert, Animated, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { CARS, CarType } from '../lib/Cars';
import { AnimateMotorCard } from '../components/MotorCard';
import { AnimateDesingCard } from '../components/DesignCard';
import { AlertModal } from '../components/AlertModal';


export default function Details() {
    const { carId } = useLocalSearchParams();
    const [modalVisible, setModalVisible] = useState(false);
    const [carInfo, setCarInfo] = useState<CarType | null>(null);
    const [selectedMotorIndex, setSelectedMotorIndex] = useState<number | null>(null);
    const [selectedTypeIndex, setSelectedTypeIndex] = useState<number | null>(null);

    useEffect(() => {
        if (carId) {
            const id = Number(carId);
            const car = CARS.find(item => item.id === id) || null;
            setCarInfo(car)
        }
    }, [carId])

    const handleSelectMotor = (index: number) => {
        setSelectedMotorIndex(index);
    };

    const handleSelectType = (index: number) => {
        setSelectedTypeIndex(index);
    };

    return (
        <View style={styles.container}>
            {carInfo === null ? (<ActivityIndicator />)
                : (
                    <>
                        <Animated.Image source={{ uri: carInfo.imageUrl }} style={styles.image} fadeDuration={0} />
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{carInfo.title}</Text>
                            <Text numberOfLines={1}>{carInfo.text}</Text>
                        </View>
                        <View style={styles.containerVelocity}>
                            <Text style={styles.titleVelocity}>{carInfo.potencia}</Text>
                            <Text style={styles.detailsVelocity}>hp-kw</Text>
                            <Text style={styles.titleVelocity}>{carInfo.aceleracion}</Text>
                            <Text style={styles.detailsVelocity}>0-100km/h</Text>
                        </View>
                        <Text style={styles.titleSection}>
                            Motor
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {carInfo.motor.map((motor, index) => (
                                <AnimateMotorCard key={index.toString()} motor={motor} index={index} isSelected={index === selectedMotorIndex} onSelect={handleSelectMotor} />
                            ))}
                        </View>
                        <Text style={styles.titleSection}>
                            Design
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {carInfo.type.map((type, index) => (
                                <AnimateDesingCard key={index.toString()} type={type} index={index} isSelected={index === selectedTypeIndex} onSelect={handleSelectType} />
                            ))}
                        </View>

                        <View style={{ alignSelf: 'flex-end', paddingRight: 18, paddingTop: 35 }}>
                            <Pressable
                                onPress={() => setModalVisible(true)}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#E1E1E5' : '#19212A' },
                                    styles.buttom
                                ]}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Order Now</Text>
                            </Pressable>
                        </View>
                        <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    </>
                )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 16
    },
    containerText: {
        width: '55%',
        alignSelf: 'flex-end',
        paddingRight: 24
    },
    title: {
        fontSize: 20,
        fontWeight: '600',

    },
    image: {
        width: 400,
        height: 200,
        position: 'absolute',
        top: 60,
        right: 100,
        transform: [{ scaleX: -1 }]
    },
    containerVelocity: {
        width: 100,
        height: 200,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 24

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
        paddingTop: 15,
        paddingLeft: 24
    },
    buttom: {
        borderRadius: 16,
        height: 60,
        width: 190,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
