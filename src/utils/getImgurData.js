import * as constants from '../constants/constants';

let ImgurApi = {
	getImgurData: (url, callback, errCallback) => {
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
	}
}

export default ImgurApi;