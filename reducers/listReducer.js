import { GET_TEAM_LIST, GET_GAME_LIST, GET_LOADER } from '../actions/types';

const initailState = {
    teamName: '',
    loading: false,
    teamList: [],
    gameList: []
};

const listReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_TEAM_LIST:
            return {
                ...state,
                teamList: action.payload.data,
                loading: false
            };
        case GET_GAME_LIST:
            return {
                ...state,
                gameList: action.payload.data,
                loading: false
            };
        case GET_LOADER:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}

export default listReducer;
