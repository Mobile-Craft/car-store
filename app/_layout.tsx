import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout() {
    return (
        <Stack >
            <Stack.Screen name="index" options={{ title: '', headerLeft: () => <Ionicons name='menu' size={28} /> }} />
            <Stack.Screen name="[...carId]" options={{ title: 'Detalles', }} />
        </Stack>
    );
}

const styles = StyleSheet.create({

});