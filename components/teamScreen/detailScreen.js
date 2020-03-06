import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Full Name: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.fullName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Abbreviation: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.abbreviation}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>City: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.city}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Division: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.division}</Text>
                </View>
                <View style={{ paddingTop: 20 }} />
                <Button title='Go Back' onPress={() => this.props.navigation.goBack()} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    row: {
        flexDirection: 'row'
    },
    txtHead: {
        fontWeight: 'bold',
        fontSize: 18
    },
    txt: {
        fontStyle: 'italic',
        fontSize: 18
    }
})

export default DetailScreen;