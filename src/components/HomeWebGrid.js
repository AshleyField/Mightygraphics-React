import React from 'react'

let imageArray = [];

imageArray = [
    [
        'Barfoot & Thompson',
        'images/website_portfolio_image_barfoot.jpg'
    ],
    [
        'Black Spoke',
        'images/website_portfolio_image_black_spoke.jpg'
    ]
]

for(var i in imageArray){
    console.log('Name: ' + imageArray[i][0]);
    console.log('SRC: ' + imageArray[i][1]);
}

console.log(imageArray[0][1]);

function HomeWebGrid(){
	return (
		 <div className="display-grid">
			<div className="horizontal-line"></div>
			<div className="display-grid-inner">
				<h2>Website Design & Development</h2>
				<div className="images-container">
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_image_barfoot.jpg'} alt="Portfolio Barfoot" />
						<div className="image-overlay">
							<div className="title">
								<h4>Barfoot & Thompson</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_image_black_spoke.jpg'} alt="Portfolio BlackSpoke" />
						<div className="image-overlay">
							<div className="title">
								<h4>Black Spoke</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_image_porta_guard.jpg'} alt="Portfolio PortaGuard" />
						<div className="image-overlay">
							<div className="title">
								<h4>Porta-Guard</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_club_electrical.jpg'} alt="Portfolio Club Electrical" />
						<div className="image-overlay">
							<div className="title">
								<h4>Club Electrical</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_yda.jpg'} alt="Portfolio YDA" />
						<div className="image-overlay">
							<div className="title">
								<h4>Yoobee Design Agency</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
					<div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/website_portfolio_image_auckland_fence.jpg'} alt="Portfolio Auckland Fence" />
						<div className="image-overlay">
							<div className="title">
								<h4>Auckland Fence</h4>
							</div>
							<div className="link">
								<a href="">View Project</a>
							</div>
						</div>
					</div>
				</div>
				<div className="view-all-work-btn">
					<div className="icon">
						<svg id="svg-arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xmlSpace="preserve">
							<g>
								<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
									c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
									"/>
							</g>
						</svg>
					</div>
					<a href="" id="view-all-port">View All Website Design Projects</a>
				</div>
			</div>
        </div>
	)
}

export default HomeWebGrid;