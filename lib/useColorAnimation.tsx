import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useColorAnimation = (isSelected: boolean, duration = 300) => {
    const colorAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(colorAnim, {
            toValue: isSelected ? 1 : 0,
            duration,
            useNativeDriver: true
        }).start();
    }, [isSelected, duration]);

    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E1E1E5', '#19212A']
    });

    const textColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['black', 'white']
    });

    return { backgroundColor, textColor };
};
