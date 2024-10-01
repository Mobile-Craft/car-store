import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="[...carId]" options={{ title: 'Detalles' }} />
        </Stack>
    );
}

const styles = StyleSheet.create({

});