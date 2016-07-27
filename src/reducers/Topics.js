import * as types from '../actions/actionsConstant';

const initialState = {
	topics: [],
	topBarSta: {},
	status: false,
};

export default function Topics(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_TOPICS:
			return Object.assign({}, state, {
				topics: action.topics,
				topBarSta: state.topBarSta ? state.topBarSta : action.topics[0],
			});
		case types.SET_TOPBAR_STA:
			return Object.assign({}, state, {
				topBarSta: action.topBarSta,
				status: action.status,
			});
		default: 
			return state;
	}
}