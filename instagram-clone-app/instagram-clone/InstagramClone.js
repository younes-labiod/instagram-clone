import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import Constants from 'expo-constants';
import data from './data';

export default function Instagram() {

    return (
        <View>
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>Instagram App {'\n'}</Text>
                <StatusBar style='auto' />
            </View>
            <FlatList
                data={data.articles}
                renderItem={({ item }) => (
                    <View style='auto'>
                        <Image
                            //style={styles.image} 
                            source={item.image}
                        />

                        <Text>name: {item.name}</Text>
                        <Text>likes: {item.likes}</Text>
                        <Text>comments: {item.comments}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style='auto' />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },

    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        hieght: 44
    },
    logo: {
        flex: 1,
        height: 30,
        resizeMode: "contain"
    },
    stories: {
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        height: 104,
        padding: 10,
        backgroundColor: "#fafafa",
    }
});