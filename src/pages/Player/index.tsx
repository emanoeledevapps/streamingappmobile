import React, {useState, useRef, useEffect} from 'react';
import { View, Button, BackHandler } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { styles } from './styles';
import * as ScreenOrientation from 'expo-screen-orientation';
import {useNavigation} from '@react-navigation/native';

export function Player({route}) {
    const {data} = route.params;
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const navigation = useNavigation();

    // useEffect(() => {
    //     async function pressBack(){
    //         ScreenOrientation.unlockAsync();
    //         navigation.goBack()
    //     }
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         pressBack,
    //     );
      
    //     return () => backHandler.remove();
    // }, [])

    useEffect(() => {
        changeScreenOrientation();
    }, []);

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }
    
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: data?.fileServer,
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={status => {
                    setStatus(() => status)
                    console.log(status)
                }}
                shouldPlay={true}
                positionMillis={50000  }
            />
        </View>
    );
}