import * as types from './actionsConstant';
import ImgurApi from '../utils/getImgurData';

//或者图片列表
export let getImgurImages = (id) => {
	return dispatch => {
		return ImgurApi.getImgurImages(id, (res) => {
			dispatch(getImages(res.data));
		}, (err) => {
			dispatch(getImages([]));
		}) 
	}
}
export function getImages(imagesData) {
	return {
		type: types.GET_IMAGES,
		images: imagesData,
	}
}

//获得图片信息
export let getImgurImage = (id) => {
	return dispatch => {
		return ImgurApi.getImgurImage(id, (res) => {
			dispatch(getImage(res.data.images[0]));
		}, (err) => {
			dispatch(getImage({}));
		}) 
	}
}
export function getImage(imageData) {
	return {
		type: types.GET_IMAGES,
		images: imageData,
	}
}