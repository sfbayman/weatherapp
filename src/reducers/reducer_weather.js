import {FETCH_WEATHER} from '../actions/index'

export default function(state=[], action){
	console.log('action received');
	switch(action.type){
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			// below code ES6 style
			return [action.payload.data, ...state];
	}

	return state;
}