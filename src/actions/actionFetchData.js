'use strict';
import * as types from './actionsConstant';
import ImgurApi from '../utils/getImgurData';

export let getsData = (url, type) => {
	//选择操作方式
	let operatorType = null;
	if(type === types.GET_TOPICS) {
		operatorType = getTopics;
	} else if( type === types.GET_IMAGES) {
		operatorType = getImages;
	}

	return dispatch => {
		//正在fetcht资源
		dispatch(listLoading(true));
		return ImgurApi.gets(url, (res) => {
			dispatch(listLoading(false));
			dispatch(operatorType(res.data));
		}, (err) => {
			dispatch(operatorType([]));
		}) 
	}
}

//取得topics列表
export function getTopics(topicsData) {
	return {
		type: types.GET_TOPICS,
		topics: topicsData,
	}
}

//取得images列表
export function getImages(imagesData) {
	return {
		type: types.GET_IMAGES,
		images: imagesData,
	}
}

//get listInfo isloading
export function listLoading(status) {
	return {
		type: types.LIST_LOADING,
		isLoading: status,
	}
}

//设置topbar状态
export function setTopBarStatus(status, topBarSta, setArrow) {
	return {
		type: types.SET_TOPBAR_STA,
		topBarSta: topBarSta,
		status: status,
		setArrow: setArrow,
	}
}


