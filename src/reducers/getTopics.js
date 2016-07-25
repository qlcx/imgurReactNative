import * as types from '../actions/actions';

import * as Api from '../utils/getImgurData';

export default function getTopics(state = {counter: '22222'}, action = {}) {
	switch(action.type) {
		case types.GET_TOPICS:
			let data =Api.getImgurData(action.name);
			console.log(data);
			return {
				...state,
				counter: '1111',
			}

		default: 
			return state;
	}
}