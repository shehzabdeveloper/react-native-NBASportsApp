import { GET_TEAM_LIST, GET_GAME_LIST, GET_LOADER } from './types';

export const getTeamListType = (response) => {
    return {
        type: GET_TEAM_LIST,
        payload: response
    }
}

export const getGameListType = (response) => {
    return {
        type: GET_GAME_LIST,
        payload: response
    }
}

export const getLoader = (response) => {
    return {
        type: GET_LOADER,
        payload: response
    }
}