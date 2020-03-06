import React from 'react';
import GameListScreen from './gameListScreen';
import DetailScreen from './gameDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

class GameHomeScreen extends React.Component {

    render() {
        return (
            <Stack.Navigator
                initialRouteName='GameList'
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#3385ff' }
                }}>
                <Stack.Screen
                    name='GameList'
                    component={GameListScreen}
                    options={{
                        title: 'Game List',
                        headerLeft: () => (
                            <MaterialCommunityIcons style={{ paddingHorizontal: 18 }} name='menu' size={28} color='white' onPress={() => this.props.navigation.openDrawer()} />
                        )
                    }} />
                <Stack.Screen
                    name='GameDetailScreen'
                    component={DetailScreen}
                    options={{
                        title: 'Details'
                    }} />
            </Stack.Navigator>
        )
    }
}

export default GameHomeScreen;
