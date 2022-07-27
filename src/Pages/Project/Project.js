import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Project = () => {
	return (
		<div>
			<section className="c-section">
				<div className="c-project__info">
					<div className="c-project__info-wrap">
						<h2 className="c-section__heading c-project__info-name">Project Name</h2>
						<div className="c-project__img-wrap c-project__info-main-img">

						</div>
						<p className="c-project__info-role">Role</p>
						<div className="c-project__info-detail">
							<p>Details</p>
							<p><a href="https://codepen.io/billy0217/pens/public" target="_blank" rel="noreferrer">Link</a></p>
						</div>
						<div className="c-project__img-wrap">

						</div>
					</div>
					<div className="c-project__back-top-list">
						<Link 
							to={"/work"}
							className="c-project__info-back-btn"
						>
							<FiArrowLeft className="c-project__info-back-icon"/>
							Back
						</Link>
					</div>
				</div>
				
			</section>
		</div>
	)
}
export default Project