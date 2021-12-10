import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface IImage {
    username: string
    url: string
    watched?: boolean
}
const stories = [
    { username: 'Seus story', url: 'https://picsum.photos/150.jpg' },
    { username: 'seupereira', url: 'https://picsum.photos/100.jpg', watched: false },
    { username: 'ana_banana', url: 'https://picsum.photos/151.jpg', watched: false },
    { username: '_vitinho2001', url: 'https://picsum.photos/155.jpg', watched: false },
    { username: 'dedeborara', url: 'https://picsum.photos/222.jpg', watched: false },
    { username: 'filpe', url: 'https://picsum.photos/231.jpg', watched: false },
    { username: 'flanco', url: 'https://picsum.photos/320.jpg', watched: false },
    { username: 'fias', url: 'https://picsum.photos/220.jpg', watched: false },
]

function renderImage(params: {item: IImage}) {
    const img: IImage = {
        username: params.item.username,
        url: params.item.url,
        watched: params.item.watched
    }
    return (
        <View>
            <View style={{...styles.imgContainer, borderColor: img.watched ? '#c1c1c1' : 'tomato' }}>
                <Image
                    style={styles.img}
                    source={{ uri: img.url }}
                />
            </View>
            <Text style={styles.imgUsername}>{img.username}</Text>
        </View>
    )
}

export default function Stories() {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={stories}
                renderItem={renderImage}
                keyExtractor={(item: {username: string}) => item.username}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        margin: 5,
        marginBottom: 1,
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    img: {
        width: 63,
        height: 63,
        borderRadius: 35,
    },
    imgUsername: {
        fontSize: 10,
        textAlign: 'center'
    }
});
