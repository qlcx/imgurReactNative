import * as constants from '../constants/constants';

export function getImgurData(url) {
	fetch(constants.ImgurRootURL + url, {
		method: 'GET',
		header: {
			'Authorization': 'Client-ID '+ constants.ApiKey,
		}
	}).then(
		(res) => {
			return res.json();
		}
	).catch(
		(err) => {
			console.warn(err);
		}
	)

}