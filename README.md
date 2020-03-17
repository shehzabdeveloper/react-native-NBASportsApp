# react-native-NBASportsApp
Reference links:

# React-native Basic Intro

# 1> To create new project:
npx react-native init <application-name>

# 2>To run project:
npx react-native run-android/run-ios (to run in simulator)
Or
	npx react-native start
adb reverse tcp:8081 tcp:8081

# 3>Stylesheet reference link: https://reactnative.dev/docs/style

# 4>Navigation reference link: https://reactnavigation.org/docs/getting-started/
Required dependencies:
	@react-navigation/native

react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


In Android, we need to add these dependencies in the Gradle file.
android/app/build.gradle:

implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
Implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

Finally, we need to add a react-native-gesture-handler, at top of our entry files, such as index.js or App.js.

Now we need to install @react-navigation/stack

Code Snippet:

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

<NavigationContainer>
<Stack.Navigator>
      	<Stack.Screen name="" component={} />
		<Stack.Screen name="" component={} />
</Stack.Navigator>
</NavigationContainer>

To navigate to another screen, 
onPress={()=>this.props.navigation.navigate('')}


To clean and run:

cd android &&./gradlew clean
cd .. && react-native run-android
(alternative way using android studio)

# 5>Redux reference link: https://appdividend.com/2018/08/04/react-native-redux-example-tutorial/

Install → redux react-redux redux-thunk
Add types and reducers

types.js
export const GET_API = 'GET API';

export const getApiAction = (response) => {
    return {
        type: GET_API,
        payload: response
    }
}

# Reducers

import { GET_API } from '../actions/types';

const initailState = {
    gameList: []
}

const gameReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_API:
            return {
                ...state,
                gameList: action.payload.data
            };
        default:
            return state;
    }
}

export default gameReducer;


# Network folder

import { getApiAction } from '../actions/types';

export const getGameList = () => {
    return dispatch => {

        fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "b012625aacmsh5e6e76a61547acfp11875bjsn20ce4eb1b8e4"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch(getApiAction(json))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

# Create redux store (store.js)

import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    game: gameReducer
});

const configStore = () => {
    return createStore(reducer,applyMiddleware(thunk));
}

export default configStore;

# Pass store to the native app(index.js):

import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);	

	
# Connect react-native to the redux store(App.js):

const mapStateToProps = state => {
  return {
    gameList: state.game.gameList
  }
}

const mapDispatchToProp = dispatch => {
  return {
    makeApiCall: () => {
      dispatch(getGameList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(App);
