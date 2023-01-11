import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Header({ navigation, name }) {
    return (
        <>
            <View style={styles.coverTop}></View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{name}</Text>
                <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate('Back')}>
                    <AntDesign name="left" size={20} color="hsl(203, 100%, 40%)" />
                    <Text style={styles.headerTextBack}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
        </>
    );
}

const styles = StyleSheet.create({
    coverTop: {
        height: 30,
        width: '100%',
        backgroundColor: 'white',
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backContainer: {
        position: 'absolute',
        left: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 17,
        fontWeight: '500'
    },
    headerTextBack: {
        fontSize: 16,
        color: 'hsl(203, 100%, 40%)'
    },
    divider: {
        width: '100%',
        height: 0.4,
        backgroundColor: 'hsl(0, 0%, 80%)'
    }
});
