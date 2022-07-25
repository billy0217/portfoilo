import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<section className="c-section c-section__notfound">
				<h1 className="c-section__heading">Page Not Found</h1>
				<p>Sorry, Can't find the page you were looking for.</p>
				<p><Link to={"/"} className="">Back to Homepage</Link></p>
			</section>
		</div>
	)
}

export default NotFound;