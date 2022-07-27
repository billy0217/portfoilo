import React from 'react'
import Card from '../../Components/Card/Card';

const Work = () => {

	const projectData = {
		
		slug : "project",
		name: "Project",
		role: "Full Stack Developer",
		company: "Freelance",
		webp: "/project.webp",
		src: "/project.jpg"
	}

	return (
		<div>
			<section className="c-section">
				<div className="c-projects">
					<div className="c-project__sidebar">
						<h2 className="c-section__heading">Selected Works</h2>
					</div>
					<div className="c-projects__list">
						<div className="c-proejct">
							<Card project={projectData} />
						</div>
						<div className="c-proejct">
							<Card project={projectData} />
						</div>
					</div>
				</div>
				
			</section>
		</div>
	)
}

export default Work;