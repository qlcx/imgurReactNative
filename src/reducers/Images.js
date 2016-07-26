import * as types from '../actions/actionsConstant';

const initialState = {
	Images: [],
};

export default function Images(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_IMAGES:
			return Object.assign({}, state, {
				Images: action.images,
			});
		default: 
			return state;
	}
}