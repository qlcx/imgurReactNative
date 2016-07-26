import * as types from '../actions/actionsConstant';

const initialState = {
	topics: [],
	initName: '',
};

export default function getTopics(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_TOPICS:
			return Object.assign({}, state, {
				topics: action.topics,
			});
		default: 
			return state;
	}
}