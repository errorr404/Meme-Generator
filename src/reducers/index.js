import { combineReducers } from 'redux';
import {RECEIVE_MEME, NEW_MEME } from '../actions';

function memes(state = [], action) {
  switch(action.type) {
    case RECEIVE_MEME:
    return action.memes;
    default:
    return state;
  }
}

function myMemes(state=[], action) {
  switch(action.type) {
    case NEW_MEME:
    state = [...state, action.meme];
    return state;
    default:
    return state;
  }
}
const rootReducer = combineReducers({memes, myMemes});

export default rootReducer;
