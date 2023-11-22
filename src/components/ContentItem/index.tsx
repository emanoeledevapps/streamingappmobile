import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { ContentProps } from '../../interfaces/content';
import {useNavigation} from '@react-navigation/native';

//import { styles } from './styles';

interface Props{
    data: ContentProps;
    top10?: boolean;
    index: number;
}

export function ContentItem({data, top10, index}: Props) {
    const navigation = useNavigation();

    if(top10){
        return(
            <TouchableOpacity 
                style={{height: 175, borderRadius: 3, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.navigate('DetailContent', {data})}
            >
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 200, lineHeight: 200}}>{index}</Text>
                <Image
                    source={{uri: data.postUrl}}
                    style={{width: 120, height: 175, resizeMode: 'contain', marginLeft: -50}}
                />
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity 
            style={{backgroundColor: 'gray', width: 120, height: 175, borderRadius: 3, marginRight: 10}}
            onPress={() => navigation.navigate('DetailContent', {data})}
        >
            <Image
                source={{uri: data.postUrl}}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
        </TouchableOpacity>
    );
}