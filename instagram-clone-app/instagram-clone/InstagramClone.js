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
import { Feather } from '@expo/vector-icons';
import Stories from './Stories';
import data from './data';
import Article from './Article';
import { Camera } from 'expo-camera';
import { useEffect } from 'react';
import { Permissions } from 'expo';


const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png";


export default function Instagram() {


    const [showCamera, setShowCamera] = useState(false);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    
    // Inside your Instagram component
    /*useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
                console.log('Camera permission not granted');
            }
        })();
    }, []);*/
    function renderItem({ item, index }) {


        if (index === 0) {
            return (
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} />
                    </View>

                    <Article item={item} />
                </>
            );
        } else {
            return (
                <Article item={item} />
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    setShowCamera(!showCamera);
                    setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                }
                }>
                    <Feather name="camera" size={24} />
                </TouchableOpacity>
                <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />

                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data.articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />

            {
                showCamera && (
                    <Camera style={styles.camera} type={cameraType} >
                        <View style={styles.cameraContainer}>
                            <TouchableOpacity onPress={() => { setShowCamera(false) }}>
                                <Feather name='x' size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )
            }
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
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
    },
    camera: {
        height:650
    },
    cameraContainer: {

        height:650
    }
});