import * as types from './actionsConstant';
import ImgurApi from '../utils/getImgurData';

/*
export let getImgurData = (url) => {
	return dispatch => {
		return ImgurApi.getImgurData(url, (res) => {
			dispatch(getTopics(res.data));
		}, (err) => {
			dispatch(getTopics([]));
		}) 
	}
}

export function getTopics(topicsData) {
	return {
		type: types.GET_TOPICS,
		topics: topicsData,
	}
}
*/