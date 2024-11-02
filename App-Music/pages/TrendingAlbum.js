// TrendingAlbum.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function TrendingAlbum({ image, title, artist }) {
  return (
    <View style={styles.albumContainer}>
      <Image style={styles.albumImage} source={image} />
      <Text style={styles.albumTitle}>{title}</Text>
      <Text style={styles.albumArtist}>{artist}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: { marginHorizontal: 10 },
  albumImage: { width: 100, height: 100, borderRadius: 10 },
  albumTitle: { fontWeight: 'bold', fontSize: 14, marginTop: 5 },
  albumArtist: { color: 'gray', fontSize: 12 },
});
