import * as types from '../actions/actionsConstant';

const initialState = {
	Images: [],
  Imageinfo: [],
};

export default function getImages(state = {initialState}, action = {}) {
	switch(action.type) {
		case types.GET_IMAGES:
			return {
				...state,
				Images: action.images,
			}
    case types.GET_IMAGE: 
      return {
        ...state,
        Image: Image.push(action.image),
      }
		default: 
			return state;
	}
}