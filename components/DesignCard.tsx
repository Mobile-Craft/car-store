import React, { useEffect, useRef } from 'react'
import { StyleSheet, Pressable, Animated } from 'react-native'
import { useScaleAnimation } from '../lib/useScaleAnimation';
import { useColorAnimation } from '../lib/useColorAnimation';

export function DesignCard({ type, index, isSelected, onSelect }) {
    const scale = useScaleAnimation(isSelected);
    const { backgroundColor, textColor } = useColorAnimation(isSelected);

    return (
        <Pressable onPress={() => onSelect(index)}>
            <Animated.View
                style={[
                    styles.container,
                    {
                        backgroundColor,
                        transform: [{ scale }],
                    },
                ]}
            >
                <Animated.Text style={[styles.title, { color: isSelected ? 'white' : 'black' }]}>
                    {type.title}
                </Animated.Text>
                <Animated.Text numberOfLines={1} style={{ color: isSelected ? 'white' : 'black' }}>
                    {type.text}
                </Animated.Text>
            </Animated.View>
        </Pressable>
    )
};

export function AnimateDesingCard({ type, index, isSelected, onSelect }) {
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
            <DesignCard type={type} index={index} isSelected={isSelected} onSelect={onSelect} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 75,
        borderRadius: 16,
        marginVertical: 14,
        backgroundColor: 'white',
        paddingHorizontal: 14,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 4.5,
            height: 5,

        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    }
});
