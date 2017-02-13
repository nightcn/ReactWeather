var React = require('react');


var WeatherMessage = ({temp, location}) => {

	return (
		<div>
			<h4>The temperture in {location} is {temp}</h4>
		</div>
	);
}

module.exports = WeatherMessage;