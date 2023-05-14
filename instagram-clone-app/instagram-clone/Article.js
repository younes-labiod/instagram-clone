import data from "./data";
import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";
import { Feather } from '@expo/vector-icons'

export default function Article({ item }) {

    return (
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name} >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16} />
                </TouchableOpacity>
            </View>
            <Image source={item.image} style={styles.image} />

            <View style={styles.action}>
                <View style={styles.actionLeft}>

                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="heart" size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="message-circle" size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="send" size={24} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="bookmark" size={24} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.likes}>likes</Text>
                <Text style={styles.commentCount}>View all comments </Text>

            </View>


        </View>
    )
};


const styles = StyleSheet.create({
    article: {
        marginBottom: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 60
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    name: {
        textAlign: 'center',
        lineHeight: 14,
        color: '#262626',
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 12
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        resizeMode: 'contain',
        backgroundColor: 'red',
        margin: 0,
        padding: 0
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingHorizontal: 8
    },
    actionLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionButton: {
        marginRight: 8
    },
    info: {
        paddingHorizontal: 15
    },
    likes: {
        fontWeight: 'bold',
        color: '#262626',
        marginBottom: 6,
        marginTop: 6
    },
    comments: {
        color: 'gray',
        fontSize: 10,
        marginBottom: 5
    },
});