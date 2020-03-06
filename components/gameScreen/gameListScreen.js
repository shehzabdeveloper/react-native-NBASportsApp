import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getGameListApi } from '../../network/apiList';
import { connect } from 'react-redux';

class GameListScreen extends React.Component {

    state = {
        loading: false,
        gameList: []
    }

    onClickGetListbtn = () => {
        this.props.getGameList()
    }

    onClickGame = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GameDetailScreen', {
                date: item.date,
                homeTeamabbreviation: item.home_team.abbreviation,
                homeTeamScore: item.home_team_score,
                visitorTeamabbreviation: item.visitor_team.abbreviation,
                visitorTeamScore: item.visitor_team_score,
            })}>
                <Text style={styles.txt}>{item.home_team.abbreviation} vs {item.visitor_team.abbreviation}</Text>
                <View style={styles.itemSeperator} />
            </TouchableOpacity>
        );
    };

    gameList = () => {
        return (
            <View style={styles.listContainer}>
                {this.props.isLoading && (
                    <ActivityIndicator
                        style={{ height: 80 }}
                        color="#C00"
                        size="large"
                    />
                )}

                <FlatList
                    data={this.props.gameList}
                    renderItem={this.onClickGame}
                    keyExtractor={item => item.id + ''}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn}
                        onPress={this.onClickGetListbtn}>
                        <Text style={styles.btnTxt}>Get Last 25 Games</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hrLine} />

                {this.gameList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    listContainer: {
        width: '100%',
        padding: 10
    },
    txt: {
        fontSize: 18,
        padding: 10,
        alignSelf: 'center'
    },
    itemSeperator: {
        height: 1,
        width: "100%",
        backgroundColor: "#000"
    },
    btn: {
        width: '100%',
        height: 30,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnView: {
        width: '100%',
        padding: 10
    },
    flatList: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
    hrLine: {
        height: 1,
        backgroundColor: 'black',
        width: '100%'
    },
    btnTxt: {
        color: 'white'
    }
});

const mapStateToProps = state => {
    return {
        gameList: state.teamListReducer.gameList,
        isLoading: state.teamListReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGameList: () => {
            dispatch(getGameListApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameListScreen);
