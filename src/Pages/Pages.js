import React, { useEffect, useState } from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './Home/Home'
import Header from '../Components/Header/Header'
import NotFound from './NotFound/NotFound'
import Footer from '../Components/Footer/Footer'
import About from './About/About'
import Work from './Work/Work'

const Pages = () => {
	const location = useLocation();

	const [isHome, setIsHome] = useState(false);

	const checkIsHome = (location) => {
		if(location.pathname === '/'){
			setIsHome(true);
		}else {
			setIsHome(false);
		}
	}

	useEffect(()=>{
		checkIsHome(location);
	},[location]);

	return (
		<div>
			<Header home={isHome}/>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work">
					<Route index element={<Work />} />
					<Route path=":slug" element={<Work />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer home={isHome} />
		</div>
	)
}

export default Pages