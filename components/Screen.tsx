import { View } from 'react-native';

export default function Screen({ children }) {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            {children}
        </View>
    );
}
