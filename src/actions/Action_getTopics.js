import * as types from './actionsConstant';
import ImgurApi from '../utils/getImgurData';

export let getImgurTopics = (url) => {
	return dispatch => {
		return ImgurApi.getImgurTopics(url, (res) => {
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

//触发下拉菜单的动作