import React, {useState, useEffect, useRef} from 'react';
import { View, Button, ScrollView, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';

import { ContentProps } from '../../interfaces/content';
import { ContentItem } from '../../components/ContentItem';

export function Home() {
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState<ContentProps[]>([]);

    useEffect(() => {
        getContents();
    }, []);

    async function getContents(){
        setLoading(true);
        const response = await api.get('/content')
        setContents(response.data.contents)
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        source={{uri: 'https://cdn.discordapp.com/attachments/577075815825539094/1174877698229813320/3.jpg?ex=6569311f&is=6556bc1f&hm=5ace8bb1b4a258f326f88ca109f33fe8b983a57b210e537c597f5b94cdb1e1da&'}}
                        style={{width: '100%', height: 500, resizeMode: 'cover'}}
                    />

                    <View style={{alignItems: 'center', height: 130, backgroundColor: 'rgba(0,0,0, 0.8)', position: 'absolute', width: '100%', bottom: 0, padding: 15, borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: 25}}>Loki: 2ª Temporada</Text>
                        <Text style={{color: 'white', textAlign: 'center'}}>O rei da mentira está de volta, veja agora o trailer</Text>

                        <TouchableOpacity
                            style={{paddingVertical: 5, paddingHorizontal: 15, backgroundColor: 'white', borderRadius: 5, marginTop: 10}}
                        >
                            <Text style={{fontWeight: 'bold'}}>Assistir</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{fontWeight: 'bold', color: 'white', marginLeft: 10}}>Top 10</Text>
                <FlatList
                    data={contents}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <ContentItem
                            data={item}
                            top10
                            index={index + 1}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingLeft:10, marginBottom: 20}}
                />
            
                <Text style={{fontWeight: 'bold', color: 'white', marginLeft: 10}}>Adicionados recentemente</Text>
                <FlatList
                    data={contents}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <ContentItem
                            data={item}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingLeft:10}}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
