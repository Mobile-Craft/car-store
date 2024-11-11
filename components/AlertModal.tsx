import { Link } from 'expo-router';
import LottieView from 'lottie-react-native';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';


interface CustomModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

export function AlertModal({ modalVisible, setModalVisible }: CustomModalProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <LottieView
                        source={require('../assets/lottie/loading3.json')}
                        autoPlay={true}
                        loop={true}
                        style={styles.lottie}
                        resizeMode='cover'
                    />
                    <Text style={styles.modalText}>¡Felicidades!</Text>
                    <Text style={styles.modalSubText}>Haz adquirido tu nuevo vehiculo!</Text>
                    <Link href={`/`} asChild
                        style={[styles.button, styles.buttonClose]}>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Aceptar</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000005e'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#19212A',
        paddingHorizontal: 30
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 22
    },
    modalSubText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15
    },
    lottie: {
        width: 200,
        height: 50,
        marginBottom: 10,
        transform: [{ scaleX: -1 }]
    },
});