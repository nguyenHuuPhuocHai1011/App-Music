import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MusicPlayerScreen({ route, navigation }) {
  const { song, songs } = route.params; // Lấy bài hát hiện tại và danh sách bài hát
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    // Nếu có âm thanh đang phát, dừng nó trước
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync(); // Giải phóng tài nguyên
    }
    
    const { sound: newSound } = await Audio.Sound.createAsync({ uri: song.audio });
    setSound(newSound);
    await newSound.playAsync();
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    const currentIndex = songs.findIndex(item => item.id === song.id); // Tìm chỉ số bài hát hiện tại
    const nextIndex = (currentIndex + 1) % songs.length; // Chuyển tới bài tiếp theo
    navigation.navigate('MusicPlayerScreen', { song: songs[nextIndex], songs }); // Chuyển tới bài hát mới
  };

  const prevSong = () => {
    const currentIndex = songs.findIndex(item => item.id === song.id); // Tìm chỉ số bài hát hiện tại
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length; // Chuyển về bài trước đó
    navigation.navigate('MusicPlayerScreen', { song: songs[prevIndex], songs }); // Chuyển tới bài hát mới
  };

  useEffect(() => {
    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Giải phóng tài nguyên âm thanh khi rời khỏi trang
      }
    };
  }, [song]); // Đảm bảo rằng âm thanh được phát lại khi bài hát thay đổi

  return (
    <View style={styles.container}>
      <Text>Now Playing: {song.name}</Text>
      <Text>Artist: {song.artist_name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={prevSong} />
        {!isPlaying ? (
          <Button title="Play" onPress={playSound} />
        ) : (
          <Button title="Pause" onPress={pauseSound} />
        )}
        <Button title="Next" onPress={nextSong} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
