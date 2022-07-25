import React, { useState } from "react";
import BkImg from '../../assets/img/home-bg-img.jpg';

const Home = () => {

	const [position, setPosition] = useState({x:"", y: ""});

	const handleMouseMove = (e) => {
		const bkImg = document.querySelector('.c-section__home');
		const walk = 50;
		if(bkImg){

			let targetX = bkImg.clientWidth;
			let targetY = bkImg.clientHeight;

			let pageX = e.pageX - (targetX / 2);
			let pageY = e.pageY - (targetY / 2);

			let xWalk = Math.round((walk / targetX) * pageX * -1 -25);
			let yWalk = Math.round((walk / targetY) * pageY * -1 -30);

			setPosition({
				x: xWalk,
				y: yWalk,
			});
		
		}
	};

	return(
		<div>
			<section 
				className="c-section c-section__home"
				onMouseMove={ (e) => handleMouseMove(e)}
				style={{ 
					backgroundImage: `url(${BkImg})`,
					backgroundPosition: `${position.x}px ${position.y}px`
				}}
			>
				<h2 className="c-section__home-text">
					<span>Hi! I am Billy,</span> Full stack Web Developer<br /> at Terabyte<span className="blink"></span>
				</h2>
			</section>
		</div>
	)
}

export default Home;