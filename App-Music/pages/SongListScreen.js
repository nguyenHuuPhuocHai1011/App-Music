import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const API_KEY = 'b9c5d5ac'; 

const SongListScreen = ({ navigation }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&limit=100`) 
      .then(response => response.json())
      .then(data => {
        setSongs(data.results); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('MusicPlayerScreen', { song: item, songs})}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.artist_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default SongListScreen;
