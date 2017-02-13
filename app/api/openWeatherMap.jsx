var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f93bb9e15d83d51b31b4542b6e7d66f0&units=metric';

//f93bb9e15d83d51b31b4542b6e7d66f0

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {

			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				if (res.data.name.toLowerCase() !== location.toLowerCase()) {
					alert('Country not found ' + res.data.name );
					return 'unknown';
				}
				
				return res.data.main.temp;
			}
		}, function (err) {
			throw new Error(err.response.data.message);
		});
	}
}