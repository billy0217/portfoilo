import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
	return (
		<>
			<Link
				to={{
					pathname: '/work/' + props.project.slug,
				}}
			>
				<figure className="o-fig o-fig__landscape c-proejct__thumb">
					<picture>
						{props.project.webp &&
							<source srcSet={props.project?.webp} type="image/webp" />
						}
						<img src={props.project.src} className="c-project__img o-fig__img" alt="" />
					</picture>
				</figure>
				<h3 className="c-project__name">{props.project.name}</h3>
				<p className="c-project__role">{props.project?.company} - {props.project?.role} role</p>
			</Link>
		</>
	)
}

export default Card