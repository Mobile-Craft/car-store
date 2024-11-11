import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Screen from '../components/Screen';
import { Animated, FlatList, RefreshControl, StyleSheet, Text } from 'react-native';
import { CARS } from '../lib/Cars';
import { AnimateCarCard } from '../components/CarCard';
import { Audio } from "expo-av";
import LottieView from 'lottie-react-native';

export default function IndexScreen() {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const sound = useRef<Audio.Sound | null>(new Audio.Sound()); // Tipamos correctamente el useRef con Audio.Sound
    const lottieRef = useRef<LottieView>(null);

    // Solicitar permisos y cargar el sonido
    useEffect(() => {
        const loadSound = async () => {
            try {
                // Configuración global de audio
                await Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true, // Asegurar que funcione en modo silencioso en iOS
                });

                // Solicitar permisos de audio (esto es importante para dispositivos físicos)
                const { status } = await Audio.requestPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Permiso de audio denegado');
                    return;
                }

                // Cargar el archivo de sonido
                await sound.current?.loadAsync(require("../assets/sound.mp3"));
            } catch (error) {
                console.error('Error al cargar el sonido:', error);
            }
        };

        loadSound();

        return () => {
            sound.current?.unloadAsync(); // Limpiar el sonido al desmontar el componente
        };
    }, []);

    // Función para reproducir el sonido
    const playSound = async () => {
        try {
            const status = await sound.current?.getStatusAsync();
            if (status?.isLoaded) {
                await sound.current?.replayAsync(); // Reproducir de nuevo el sonido si está cargado
                await sound.current?.setPositionAsync(1500);
            }
        } catch (error) {
            console.error('Error al reproducir el sonido:', error);
        }
    };

    // Función para detener el sonido
    const stopSound = async () => {
        try {
            const status = await sound.current?.getStatusAsync();
            if (status?.isLoaded && status.isPlaying) {
                await sound.current?.stopAsync();
            }
        } catch (error) {
            console.error('Error al detener el sonido:', error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        playSound();
        lottieRef.current?.play();
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(async () => {
                await stopSound();
                setRefreshing(false);
            }, 2000);
        });
    }, [fadeAnim]);

    useEffect(() => {
        if (!refreshing) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [refreshing, fadeAnim]);

    return (
        <Screen>
            <StatusBar style="auto" />
            {refreshing && (
                <LottieView
                    source={require('../assets/lottie/loading4.json')}
                    autoPlay={true}
                    loop={true}
                    style={styles.lottie}
                />
            )}
            <Animated.View style={{ marginTop: refreshing ? 60 : 0 }}>
                <FlatList
                    ListHeaderComponent={<Text style={styles.title}>Selecciona tu vehiculo</Text>}
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="transparent"
                    />}
                    data={CARS}
                    keyExtractor={(car) => car.id.toString()}
                    renderItem={({ item, index }) => <AnimateCarCard car={item} index={index} />}
                />
            </Animated.View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: '100%',
        height: '20%',
        position: 'absolute',
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        marginHorizontal: 25,
        marginBottom: 14,
        marginTop: 20

    }
});