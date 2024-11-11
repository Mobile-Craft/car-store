import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useScaleAnimation = (isSelected: boolean, duration = 300) => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scale, {
            toValue: isSelected ? 1.07 : 1,
            duration,
            useNativeDriver: true
        }).start();
    }, [isSelected, duration]);

    return scale;
};
