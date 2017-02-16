var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=ashdod'>Ashdod, Israel</Link>
				</li>
				<li>
					<Link to='/?location=tel aviv'>Tel Aviv, Israel</Link>
				</li>
				<li>
					<Link to='/?location=tokyo'>Tokyo, Japan</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;