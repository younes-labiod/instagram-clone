import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';
import {Feather} from '@expo/vector-icons';
import Stories from './Stories';
import data from './data';


const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png";

export default function Instagram() {


    function runderItem({ item, index }) {

        if (index === 0) {
            return (
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} />
                    </View>
                </>
            );
        } else {
            return;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24} />
                </TouchableOpacity>
                <Image source={{uri : INSTAGRAM_LOGO}} style={styles.logo}/>

                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data.articles}
                renderItem={({ item }) => (
                    <View style='auto'>
                        <Image
                            style={styles.image}
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
        </SafeAreaView>

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

    image: {
        width: '100%',
        height: 200
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