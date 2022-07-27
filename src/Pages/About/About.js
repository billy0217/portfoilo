import React, { useEffect, useState } from 'react'
import { FiCodepen, FiGithub } from 'react-icons/fi';

const About = () => {
	const [totalExp, setTotalExp] = useState("");

	const calcTotalExp = () => {

		let df= new Date("6/14/2013");
		let dt = new Date();
		let allMonths = dt.getMonth() - df.getMonth() + (12 * (dt.getFullYear() - df.getFullYear()));
		let allYears= dt.getFullYear() - df.getFullYear();
		let partialMonths = dt.getMonth() - df.getMonth();
		let months;
		let exp;

		if (partialMonths < 0) {
			allYears--;
			partialMonths = partialMonths + 12;
		}

		if( 0 < allYears ){
			allYears += ' years';
		}

		if( 1 <= partialMonths){
			
			if(1 === partialMonths){
				months = " and " + partialMonths + " month"
			}else{
				months = " and " + partialMonths + " months"
			}
			
		}else{
			months = "";
		}

		exp = allYears + months;
		setTotalExp(exp);
	}

	useEffect(() => {
		calcTotalExp();
	},[])

	return (
		<div>
			<section className="c-section">
				<div className="c-section__content">
					<h2 className="c-section__heading">About</h2>
					<p>I am a Full stack Web Developer with more than {totalExp} of professional experience, who is passionate about working with responsive and interactive websites</p>
					<p>I'm a very responsible and hard-working professional. I very much  enjoy  being a developer and I'm always researching and  learning the latest technologies that could be helpful for the company and its customers.</p>
					<p>If you want to know more about me? follow me <strong><a href="https://www.linkedin.com/in/billy-han-1a253976/" target="_blank" rel="noreferrer">Linkedin</a></strong> or reach out by <strong><a href="mailto:nada_billy0217@hotmail.com">email</a></strong></p>
					<p><a href="https://github.com/billy0217/" target="_blank" className="c-icon-link" rel="noreferrer"><FiGithub className="c-icon-link__icon" /> GitHub Repo</a></p>
					<p><a href="https://codepen.io/billy0217/pens/public" target="_blank" className="c-icon-link" rel="noreferrer"><FiCodepen className="c-icon-link__icon" /> CodePen Play Ground</a></p>
				</div>
			</section>
		</div>
	)
}

export default About