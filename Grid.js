import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import {
    ContextMenuProvider,
    ContextMenuContainer,
} from "@brnho/react-native-context-menu";
import Header from "./Header";

const colors = [
    "hsl(175, 100%, 75%)",
    "hsl(218, 100%, 75%)",
    "hsl(303, 100%, 75%)",
    "hsl(100, 100%, 75%)",
    "hsl(30, 100%, 75%)",
    "hsl(51, 100%, 75%)",
    "hsl(343, 100%, 75%)",
    "hsl(284, 100%, 75%)",
];
const randomNums = [...Array(30).keys()].map(() => Math.floor(Math.random() * 8));

const menuItems = [
    { text: "Action", isTitle: true, onPress: () => { } },
    {
        text: "Home",
        icon: {
            type: "Feather",
            name: "home",
            size: 18,
        },
        onPress: () => {
            alert("Home pressed");
        },
    },
    {
        text: "Edit",
        icon: {
            type: "Feather",
            name: "edit",
            size: 18,
        },
        onPress: () => {
            alert("Edit pressed");
        },
    },
    {
        text: "Delete",
        icon: {
            type: "Feather",
            name: "trash",
            size: 18,
        },
        withSeparator: true,
        isDestructive: true,
        onPress: () => {
            alert("Delete pressed");
        },
    },
    {
        text: "More",
        icon: {
            type: "Feather",
            name: "more-horizontal",
            size: 18,
        },
        onPress: () => {
            alert("More pressed");
        },
    },
];

const ListItem = ({ item }) => {
    const row = [...Array(3).keys()].map((num) => {
        return (
            <ContextMenuContainer marginTop={15} menuItems={menuItems} borderRadius={5} key={num}>
                <View style={[styles.listItem, { backgroundColor: colors[randomNums[item.num * 3 + num]] }]}>
                    <Text>Item {item.num * 3 + num + 1}</Text>
                </View>
            </ContextMenuContainer>
        );
    });
    return <View style={styles.rowContainer}>{row}</View>;
};

export default function Grid({ navigation }) {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const data = [...Array(10).keys()].map((item) => {
        return { num: item };
    });
    return (
        <ContextMenuProvider setScrollEnabled={setScrollEnabled}>
            <Header navigation={navigation} name='Grid Example' />
            <View style={styles.container}>
                <FlatList
                    scrollEnabled={scrollEnabled}
                    data={data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    keyExtractor={(_, index) => index}
                />
            </View>
        </ContextMenuProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white'
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    listItem: {
        backgroundColor: "hsl(175, 100%, 50%)",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    }
});
