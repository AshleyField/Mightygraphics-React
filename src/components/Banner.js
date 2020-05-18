import React from 'react'
import {Link} from 'react-router-dom';

function Banner(){
	return (

		<div className="banner">
			<div className="banner-inner">
				<div className="callout">
					<h1>Bringing your vision to reality</h1>
				</div>
				<div className="button btn-large">
                    <Link to="/Work">Work</Link>
				</div>
			</div>
		</div>
	)
}

export default Banner;