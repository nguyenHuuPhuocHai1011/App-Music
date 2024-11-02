import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
    const popularSongs = [
        { id: '1', name: 'Let you free', artist: 'Ryan Young', plays: '68M', duration: '03:35' },
        { id: '2', name: 'Blinding Lights', artist: 'Ryan Young', plays: '93M', duration: '04:39' },
        // Thêm các bài hát khác
    ];

    const albums = [
        { id: '1', title: 'ME', artist: 'Jessica Gonzalez' },
        { id: '2', title: 'Magna nost', artist: 'Jessica Gonzalez' },
        // Thêm các album khác
    ];

    const renderSongItem = ({ item }) => (
        <View style={styles.songItem}>
            <Text>{item.name}</Text>
            {/* Các chi tiết bài hát khác */}
        </View>
    );

    const renderAlbumItem = ({ item }) => (
        <View style={styles.albumItem}>
            <Text>{item.title}</Text>
            {/* Các chi tiết album khác */}
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
            <Image source={{ uri: 'https://placeimg.com/200/200/people' }} style={styles.profileImage} />
            <Text style={styles.profileName}>Ryan Young</Text>
            <Text style={styles.followerCount}>65.1K Followers</Text>
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Popular</Text>
            <FlatList
                data={popularSongs}
                renderItem={renderSongItem}
                keyExtractor={(item) => item.id}
                style={styles.popularList}
                scrollEnabled={false} // Đặt `scrollEnabled` thành `false` để FlatList không cuộn độc lập
            />

            <Text style={styles.sectionTitle}>Albums</Text>
            <FlatList
                data={albums}
                renderItem={renderAlbumItem}
                keyExtractor={(item) => item.id}
                horizontal
                style={styles.albumList}
                scrollEnabled={false} // Đặt `scrollEnabled` thành `false` để FlatList không cuộn độc lập
            />
        </ScrollView>
    );
};

export default ProfileScreen;
