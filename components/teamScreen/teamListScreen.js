import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getTeamListApi } from '../../network/apiList';
import { connect } from 'react-redux';

class TeamListScreen extends React.Component {

    state = {
        teamName: '',
        loading: false,
        teamList: []
    }

    onClickGetListbtn = () => {
        this.props.getTeamList()
    }

    onClickTeam = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', {
                fullName: item.full_name,
                abbreviation: item.abbreviation,
                city: item.city,
                division: item.division
            })}>
                <Text style={styles.txt}>{item.full_name}</Text>
                <View
                    style={styles.itemSeperator}
                />
            </TouchableOpacity>
        );
    };

    teamList = () => {
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
                    data={this.props.teamList}
                    renderItem={this.onClickTeam}
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
                        <Text style={styles.btnTxt}>Get All Teams</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hrLine} />

                {this.teamList()}
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
        teamList: state.teamListReducer.teamList,
        isLoading: state.teamListReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTeamList: () => {
            dispatch(getTeamListApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamListScreen);
