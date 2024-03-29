import React from 'react'

const Image = (props) => {

	return (
		<>
			<figure className="o-fig o-fig__landscape">
				<picture>
					{props.img?.webp && 
						<source security={props.img?.webp} type="image/webp" />
					}
					<img className='o-fig__img' src={props.img?.src} alt={props.img?.alt} />
				</picture>
			</figure>
		</>
	)
}

export default Image