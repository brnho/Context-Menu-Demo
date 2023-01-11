import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ContextMenuProvider, ContextMenuContainer } from '@brnho/react-native-context-menu';
import Header from './Header';

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

const ExampleComponent = () => {
    return (
        <View style={styles.button}>
            <Text>Long Press Me</Text>
        </View>
    )
}

const Item = ({ navigation }) => {
    return (
        <ContextMenuProvider MENU_MARGIN={10}>
            <Header navigation={navigation} name='List Example' />
            <View style={styles.container}>
                <ContextMenuContainer borderRadius={15} menuItems={menuItems}>
                    <ExampleComponent />
                </ContextMenuContainer>
            </View>
        </ContextMenuProvider>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        height: 100,
        backgroundColor: 'hsl(141, 100%, 65%)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})