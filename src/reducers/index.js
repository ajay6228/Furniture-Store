import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import { cardsReducer } from './cardReducer';

let rootReducer = combineReducers({counterR : counterReducer, cardReducer: cardsReducer});



export default rootReducer;