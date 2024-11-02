import React, { useEffect, useState } from 'react'; // import useEffect
import { NavigationContainer } from '@react-navigation/native'; // Đừng quên import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // import Stack Navigator
import Home from './pages/Home';
import Login from './pages/Login';
import SongListScreen from './pages/SongListScreen';
import MusicPlayerScreen from './pages/MusicPlayerScreen';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <NavigationContainer>
            {/* Uncomment the following code if you want to include Login and Home screens */}
            {/* 
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            */}
            <Stack.Navigator initialRouteName="SongList">
                <Stack.Screen name="SongList" component={SongListScreen} options={{ title: 'Song List' }} />
                <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} options={{ title: 'Music Player' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
