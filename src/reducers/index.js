import { combineReducers } from 'redux';
import {RECEIVE_MEME } from '../actions';

function memes(state = [], action) {
  switch(action.type) {
    case RECEIVE_MEME:
    return action.memes;
    default:
    return state;
  }
}

const rootReducer = combineReducers({memes});

export default rootReducer;
