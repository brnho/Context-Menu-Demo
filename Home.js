import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item Example')}>
                <Text style={styles.text}>Item Example</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List Example')}>
                <Text style={styles.text}>List Example</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Grid Example')}>
                <Text style={styles.text}>Grid Example</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
    },
    button: {
        height: 100,
        width: 200,
        backgroundColor: 'hsl(187, 100%, 75%)',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    text: {
        fontSize: 15,
        fontWeight: '400'
    }
});
