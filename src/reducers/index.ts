import { combineReducers } from 'redux';

import FormReducer from  './form.reducer';
import PingPongReducer from './pingpong.reducer';

export default combineReducers({
	FormReducer,
	PingPongReducer
});