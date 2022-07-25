import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { FiHome, FiGithub } from 'react-icons/fi';

const Header = (props) => {

	return (
		<div>
			<header className={"c-header " + (props.home ? 'is_home': '')}>
				<div className="c-header__container">
					<div className="c-header__logo-wrapper">
						<Link to={"/"}>
							<img src={logo} alt="Billy Hna Logo" />
						</Link>
					</div>
					<nav className="c-nav__wrapper">
						<ul className="c-nav">
							<li className="c-nav__item">
								<NavLink 
									to="/"
									className="c-nav__item-link"
								>
									<FiHome />
								</NavLink>
							</li>
							<li className="c-nav__item">
								<NavLink 
									to="/about"
									className="c-nav__item-link"
								>
									About
								</NavLink>
							</li>
							<li className="c-nav__item">
								<NavLink 
									to="/work"
									className="c-nav__item-link"
								>
									Work
								</NavLink>
							</li>
							<li className="c-nav__item">
								<a 
									href={"https://github.com/billy0217/"}
									className="c-nav__item-link" 
									target="_blank"
									rel="noreferrer"
								>
									<FiGithub />
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;