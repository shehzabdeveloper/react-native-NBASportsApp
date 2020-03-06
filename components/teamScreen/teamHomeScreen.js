import React from 'react';
import TeamListScreen from './teamListScreen';
import DetailScreen from './detailScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

class TeamHomeScreen extends React.Component {

    render() {
        return (
            <Stack.Navigator
                initialRouteName='TeamList'
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#3385ff' },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>
                <Stack.Screen
                    name='TeamList'
                    component={TeamListScreen}
                    options={{
                        title: 'Team List',
                        headerLeft: () => (
                            <MaterialCommunityIcons style={{ paddingHorizontal: 18 }} name='menu' size={28} color='white' onPress={() => this.props.navigation.openDrawer()} />
                        )
                    }} />
                <Stack.Screen
                    name='DetailScreen'
                    component={DetailScreen}
                    options={{
                        title: 'Details',
                    }} />
            </Stack.Navigator>
        )
    }
}

export default TeamHomeScreen;
