import React, {useEffect, useState, useCallback} from 'react';
import { View, TouchableOpacity, Text, Image, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

export function DetailContent({route}) {
    const navigation = useNavigation();
    const {data} = route.params;

    useFocusEffect(useCallback(() => {
        changeScreenOrientation();
    }, []));

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }

    return (
        <View style={styles.container}>
            <View style={{marginTop: 30, position: 'absolute', top: 10, width: '100%', zIndex: 30}}>
                <TouchableOpacity
                    style={{width: 30, alignItems: 'center'}}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesome name="angle-left" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View>
                <Image
                    source={{uri: data?.postUrl}}
                    style={{width: '100%', height: 500, resizeMode: 'cover', zIndex: 10}}
                />

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Player', {data})}
            >
                <Text style={{fontWeight: 'bold', color: 'white'}}>Assistir</Text>
            </TouchableOpacity>
        </View>
    );
}