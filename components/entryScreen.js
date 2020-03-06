import 'react-native-gesture-handler';
import React from 'react';
import TeamHomeScreen from './teamScreen/teamHomeScreen';
import GameHomeScreen from './gameScreen/gameHomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './home';

const Tab = createMaterialBottomTabNavigator();

export default class EntryScreen extends React.Component {

    MyTabs = () => {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="white"
                labelStyle={{ fontSize: 12 }}
                style={{ backgroundColor: 'tomato' }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={25} />
                        )
                    }}
                />
                <Tab.Screen name='TeamHomeScreen' component={TeamHomeScreen}
                    options={{
                        tabBarLabel: 'Team List',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="team" color={color} size={25} />
                        )
                    }}
                />
                <Tab.Screen name='GameHomeScreen' component={GameHomeScreen}
                    options={{
                        tabBarLabel: 'Game List',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='gamepad-variant' color={color} size={25} />
                        )
                    }}
                />
            </Tab.Navigator>
        );
    }
    render() {
        return (
            <this.MyTabs />
        )
    }
}


