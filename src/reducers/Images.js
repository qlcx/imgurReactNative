import * as types from '../actions/actionsConstant';

const initialState = {
	Images: [],
	isLoading: false,
};

export default function Images(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_IMAGES:
			return Object.assign({}, state, {
				Images: action.images,
			});
		case types.LIST_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading,
			})
		default: 
			return state;
	}
}