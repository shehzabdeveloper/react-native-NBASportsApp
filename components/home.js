import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from './headerTab';

const Tab = createMaterialTopTabNavigator();
class Home extends React.Component {

    WelcomeScreen = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to NBA</Text>
            </View>
        );
    }

    BreifData = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Text style={{ fontStyle: 'italic' }}>The National Basketball Association is a men's professional basketball league in North America, composed of 30 teams. It is one of the four major professional sports leagues in the United States and Canada, and is widely considered to be the premier men's professional basketball league in the world</Text>
            </View>
        );
    }

    MyTabs = () => {
        return (
            <Tab.Navigator initialRouteName='Home' swipeEnabled={false} >
                <Tab.Screen name="Home" component={this.WelcomeScreen} />
                <Tab.Screen name="History" component={this.BreifData} />
            </Tab.Navigator >
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header navigation={this.props.navigation} title='Home' />
                <this.MyTabs />
            </View >
        )
    }
}

export default Home;