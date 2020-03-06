import { getTeamListType, getGameListType, getLoader } from '../actions/teamList';

export const getTeamListApi = () => {
    return dispatch => {
        dispatch(getLoader(true))
        fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "b012625aacmsh5e6e76a61547acfp11875bjsn20ce4eb1b8e4"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch(getTeamListType(json))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const getGameListApi = () => {
    return dispatch => {
        dispatch(getLoader(true))
        fetch("https://free-nba.p.rapidapi.com/games?page=0&per_page=25", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "b012625aacmsh5e6e76a61547acfp11875bjsn20ce4eb1b8e4"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch(getGameListType(json))
            })
            .catch(err => {
                console.log(err);
            });
    }
}