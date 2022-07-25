import React, { useEffect, useState } from 'react'

const Footer = (props) => {
	const [currentYear, setCurrentYear] = useState("");

	const getCurrentYear = () => {
		const year = new Date().getFullYear();
		setCurrentYear(year);
	};

	useEffect(() => {
		getCurrentYear();
	}, []);

	return (
		<div>
			<footer className={"c-footer " + (props.home ? 'is_home': '')}>
			<div className="c-footer__wrapper">
				<p className="c-footer__cpoyright">&copy; {currentYear} Billy Han. All Rights Reserved.</p>
			</div>
			</footer>
		</div>
	)
}

export default Footer