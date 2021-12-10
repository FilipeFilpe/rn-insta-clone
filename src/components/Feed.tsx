import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions, FlatList, StatusBar, StyleSheet,
    Text, View, TouchableOpacity
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { getPhotos } from '../services/unsplashAPI';

interface IImage {
    id: string | number
    username: string
    url: string
}

const publishes: IImage[] = [
    {id: 1, username: 'Seus story', url: 'https://picsum.photos/600/400.jpg' },
    {id: 2, username: 'seupereira', url: 'https://picsum.photos/350/375.jpg' },
    {id: 3, username: 'ana_banana', url: 'https://picsum.photos/502/300.jpg' },
    {id: 4, username: '_vitinho2001', url: 'https://picsum.photos/503/605.jpg' },
    {id: 5, username: 'dedeborara', url: 'https://picsum.photos/504.jpg' },
    {id: 6, username: 'filpe', url: 'https://picsum.photos/505/350.jpg' },
    {id: 7, username: 'flanco', url: 'https://picsum.photos/506/300.jpg' },
    {id: 8, username: 'fias', url: 'https://picsum.photos/507/250.jpg' },
]

const convertUnsplashDataToInstaData = (unsplashData: {id: string, user: {username: string}, urls: {small: string}}[]) => {
    const newPhotos: IImage[] = unsplashData.map(unsplashData => ({
        id: unsplashData.id,
        username: unsplashData?.user?.username || '',
        url: unsplashData?.urls?.small || ''
    }))

    return newPhotos
}

const win = Dimensions.get('window');

export default function Feed() {
    const isSubscribe: any = useRef()
    const [photos, setPhotos] = useState<any[]>([])

    const renderImage = (params: {item: IImage}) => {
        const img: IImage = {
            id: params.item.id,
            username: params.item.username,
            url: params.item.url,
        }
        return (
            <View>
                <TouchableOpacity style={styles.imgContainer}>
                    <AutoHeightImage style={styles.img} width={win.width} source={{uri: img.url}} />
                </TouchableOpacity>
                <Text>{img.username} [ {img.id} ]</Text>
            </View>
        )
    }

    const photosAPI = async () => {
        await getPhotos()
            .then((response: any) => {
                if (isSubscribe) {
                    const imageConverted = convertUnsplashDataToInstaData(response.data)
                    setPhotos(imageConverted)
                }
            }).finally(() => isSubscribe.current = false)
    }

    useEffect(() => {
        isSubscribe.current = true
        photosAPI()
    }, [])
    
    return (
        <FlatList
            style={{flex: 0}}
            data={photos}
            renderItem={renderImage}
            keyExtractor={(item: { username: string }) => item.username}
            showsVerticalScrollIndicator={false}
            contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
            contentInsetAdjustmentBehavior="automatic"
            initialNumToRender={photos.length}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,    
    },
    imgContainer: {
        flexDirection: 'row'
    },
    img: {
        resizeMode: 'contain'
    },
});
