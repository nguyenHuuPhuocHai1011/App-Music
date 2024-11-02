import React, { useEffect ,useState} from 'react'; // import useEffect
import { NavigationContainer } from '@react-navigation/native'; // Đừng quên import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // import Stack Navigator
import Home from './pages/Home';
import Login from './pages/Login';
import ProfileScreen from './pages/ProfileScreen';
// import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập từ async storage hoặc logic xác thực
        // Đặt setIsLoggedIn(true hoặc false dựa vào trạng thái xác thực)
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <>
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                        <Stack.Screen name="Home" component={Home} />
                    </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
