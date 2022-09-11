import React, {useState, useEffect} from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link,useParams } from 'react-router-dom';
import {ProjectQuery} from '../../contentfull/contentfull';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from '../../Components/Image/Image';

function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return null;
}

const Project = () => {

	let params = useParams();
	const query = ProjectQuery(params.slug);

	const [projectData, setProjectData ] = useState([]);

	const [imgSet, setImgSet ] = useState([]);

	useEffect(() => {
		const project = [];
		const imageList = [];
		let loadDate = false;

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

				if(!loadDate){
					// Project list
					const p = data.projectCollection.items;
					
					project.push({
						name: p[0].name,
						slug: p[0].slug,
						client: p[0].client,
						link: p[0].link,
						role: p[0].role,
						tech: p[0].tech,
						workFrom: p[0].workFrom,
						type: p[0].type,
						webp: p[0].image.url+"?fm=webp",
						src: p[0].image.url,
						content: p[0].description?.json,
						images: p[0].imagesCollection.items,
					});
					

					setProjectData(project);
					
					if(project[0].images.length > 0) {
						var len = project[0].images.length;
						for (var i = 0; i < len; i++) {
							imageList.push({
								key: i,
								webp: project[0].images[i].url+"?fm=webp",
								src: project[0].images[i].url
							});
						}
						setImgSet(imageList);
					}else{
						setImgSet([]);
					}
				}

			});
		
		//return clean up function
		return () => {
			loadDate = true;
			console.log("load content")
		}

	},[query]);


	return (
		<div>
			<section className="c-section">
				<div className="c-project__info">
					<div className="c-project__info-wrap">
						<ScrollToTopOnMount />
						<h2 className="c-section__heading c-project__info-name">{projectData[0]?.name}</h2>
						<div className="c-project__img-wrap c-project__info-main-img">
							<Image img={projectData[0]}/>
						</div>
						<p className="c-project__info-role">{projectData[0]?.role}</p>
						<div className="c-project__info-detail">
							{documentToReactComponents(projectData[0]?.content)}
							{
								projectData[0]?.tech &&
								<p><strong>Technologies :</strong> {projectData[0]?.tech}</p>
							}
							{projectData[0]?.link &&
								<p><a href={projectData[0]?.link} target="_blank" rel="noreferrer">{projectData[0]?.link}</a></p>
							}
						</div>

						{
							imgSet?.map((img) => {
								return (
									<div key={img.key} className="c-project__img-wrap">
										<Image img={img}/>
									</div>
								)
							})
						}

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