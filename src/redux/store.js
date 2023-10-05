import {createStore, combineReducers} from 'redux';
import { playersReducer } from './reducers/playersReducer';
import { teamsReducer } from './reducers/teamsReducer';

const rootReducer = combineReducers({
    players: playersReducer,
    teams: teamsReducer
  });

export const store = createStore(rootReducer);