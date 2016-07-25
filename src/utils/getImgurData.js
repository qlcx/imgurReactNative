import * as constants from '../constants/constants';

export function getImgurData(url) {
	/*
	fetch(constants.ImgurRootURL + url, {
		method: 'GET',
		headers: {
			'Authorization': 'Client-ID '+ constants.ApiKey,
		}
	}).then(
		(res) => {
			console.log(res);
			return res.json();
		}
	).catch(
		(err) => {
			console.warn(err);
		}
	);
*/
	fetch('https://api.imgur.com/3/topics/defaults', {
		method: 'GET',
		headers: {
			'Authorization': 'Client-ID 53053568429a962'
		}
	}).then((res) => {
		console.log(res);
	})
}