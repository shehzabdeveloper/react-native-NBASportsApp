import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from 'react-native-elements';
import { View } from 'react-native';

const HeaderTab = (props) => {
    return (
        <Header
            backgroundColor='#3385ff'
            leftComponent={<View style={{ paddingHorizontal: 8 }}>< MaterialCommunityIcons name='menu' size={28} color='white' onPress={() => props.navigation.openDrawer()} /></View>}
            centerComponent={{
                text: props.title,
                style: { fontSize: 20, color: 'white' }
            }}
            statusBarProps={{ translucent: true }}
        />
    );
}

export default HeaderTab;