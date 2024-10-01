import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text } from 'react-native';
import { AnimateCarCard, CarCard } from './CarCard';
import { CARS } from '../lib/Cars';
import Screen from './Screen';

export function Main() {
    return (
        <Screen >
            <StatusBar style="auto" />
            <FlatList
                data={CARS}
                keyExtractor={(car) => car.id}
                renderItem={({ item, index }) => <AnimateCarCard car={item} index={index} />} />
        </Screen>
    );
}

const styles = StyleSheet.create({

});
