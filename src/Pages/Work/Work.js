import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card';
import { ProjectListQuery } from "../../contentfull/contentfull";

const Work = () => {
	
	const query = ProjectListQuery(process.env.REACT_APP_PROJECTLIST_ID);

	const [projectData, setProjectData ] = useState([]);

	useEffect(() => {
		const projectList = [];
		window
			.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFULL_ID}/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization" : `Bearer ${process.env.REACT_APP_CONTENTFULL_ACCESS_TOKEN}`,
				},
				body: JSON.stringify({ query }),
			})
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}

				// ID list
				const IDs = data.projectList.projectsCollection.items;
				// Project list
				const projects = data.projectCollection.items;
				// Sort 
				const sortProjectList = IDs.map((i)=> projects.find((j) => j.sys.id === i.sys.id));

				var len = sortProjectList.length;
				for (var i = 0; i < len; i++) {
					projectList.push({
						id: sortProjectList[i].sys.id,
						name: sortProjectList[i].name,
						slug: sortProjectList[i].slug,
						webp: sortProjectList[i].thumb.url+"?fm=webp",
						src: sortProjectList[i].thumb.url,
						role: sortProjectList[i].role,
						company: sortProjectList[i].workFrom
					});
				}

				setProjectData(projectList);
				
			});
	},[query]);

	return (
		<div>
			<section className="c-section">
				<div className="c-projects">
					<div className="c-project__sidebar">
						<h2 className="c-section__heading">Selected Works</h2>
					</div>
					<div className="c-projects__list">
						{
							projectData?.map((item) => {
								return (
								<div className="c-proejct" key={item.id}>
									<Card project={item} />
								</div>
								)
							})
						}
						
					</div>
				</div>
				
			</section>
		</div>
	)
}

export default Work;