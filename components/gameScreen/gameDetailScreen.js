import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



class DetailScreen extends React.Component {

    displayWonTeam = () => {
        if (this.props.route.params?.homeTeamScore > this.props.route.params?.visitorTeamScore) {
            return <Text style={styles.txtWon}>{this.props.route.params?.homeTeamabbreviation} won the match!!! </Text>;
        } else {
            return <Text style={styles.txtWon}>{this.props.route.params?.visitorTeamabbreviation} won the match!!! </Text>;
        }
    }
    render() {
        let date = this.props.route.params?.date
        let res = date.split("T");
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Match Date: </Text>
                    <Text style={styles.txt}>{res[0]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Home Team : </Text>
                    <Text style={styles.txt}>{this.props.route.params?.homeTeamabbreviation}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Home Team Score: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.homeTeamScore}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Visitor Team : </Text>
                    <Text style={styles.txt}>{this.props.route.params?.visitorTeamabbreviation}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.txtHead}>Visitor Team Score: </Text>
                    <Text style={styles.txt}>{this.props.route.params?.visitorTeamScore}</Text>
                </View>
                {this.displayWonTeam()}
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
    txtWon: {
        marginTop:10,
        color: '#F44336',
        fontWeight: 'bold',
        fontSize: 18
    },
    txt: {
        fontStyle: 'italic',
        fontSize: 18
    }
})

export default DetailScreen;