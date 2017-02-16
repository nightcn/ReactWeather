var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>A simple web app built with React for learning purpose only.</p>
			<p><em>Thank you for visiting.</em></p>
			<div className="text-center"><img src="images/sunSym.png" /></div>
		</div>
	);
};


module.exports = About;