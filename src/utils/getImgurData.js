import * as constants from '../constants/constants';

let ImgurApi = {
	//取得话题列表
	getImgurTopics: (url, callback, errCallback) => {
		fetch(constants.ImgurRootURL + url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Client-ID '+ constants.ApiKey,
			}
		}).then(
			(res) => {
				res.json().then(
					(data) => {
						callback(data);
					});
			}
		).catch((err) => {
			errCallback(err);
		});
	},

	//取得图片列表
	getImgurImages: (id, callback, errCallback) => {
		fetch(constants.ImgurRootURL + 'topics/' + id, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Client-ID '+ constants.ApiKey,
			}
		}).then(
			(res) => {
				res.json().then(
					(data) => {
						callback(data);
					}
				)
			}
		).catch(
			(err) => {
				errCallback(err);
			}
		);
	},

	//取得图片信息
	getImgurImage: (id, callback, errCallback) => {
		fetch(constants.ImgurRootURL + 'gallery/album/' + id, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Client-ID '+ constants.ApiKey,
			}
		}).then(
			(res) => {
				res.json().then(
					(data) => {
						callback(data);
					}
				)
			}
		).catch(
			(err) => {
				errCallback(err);
			}
		);
	},
}

export default ImgurApi;