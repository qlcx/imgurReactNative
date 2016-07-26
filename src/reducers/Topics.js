import * as types from '../actions/actionsConstant';

const initialState = {
	topics: [],
	topBarSta: '',
};

export default function Topics(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_TOPICS:
			return Object.assign({}, state, {
				topics: action.topics,
				topBarSta: state.topBarSta ? state.topBarSta : action.topics[0].name,
			});
		case types.SET_TOPBAR_STA:
			return Object.assign({}, state, {
				topBarSta: action.status,
			});
		default: 
			return state;
	}
}