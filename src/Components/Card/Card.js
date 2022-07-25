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
						<source srcSet={props.project?.webpSrc} type="image/webp" />
						<img src={props.project.src} className="c-project__img o-fig__img" alt="" />
					</picture>
				</figure>
				<h3 className="c-project__name">{props.project.name}</h3>
				<p className="c-project__role">{props.project.role} role from {props.project.company}</p>
			</Link>
		</>
	)
}

export default Card