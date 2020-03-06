import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
    teamListReducer: listReducer
});
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;