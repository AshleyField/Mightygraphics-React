import React from 'react'


function MobileFirst(){
	return (

		<div className="mobile-first">
			<div className="mobile-first-inner">
				<div className="left">
					<h2>Mobile First Design</h2>
					<p>All projects are designed with a ‘Mobile First’ design model to ensure compatibility with modern smartphones. In 2018 an average of 58% of users visited websites on their smart phone verses a desktop, laptop or tablet.</p>
					<div className="mobile-first-infographic">
						<div className="icon">
                            <img src={process.env.PUBLIC_URL + '/images/electronics.png'} alt="Optimised" />
						</div>
						<p>Optimised for phone, tablet Laptop, and desktop devices</p>
					</div>
					<div className="mobile-first-infographic">
						<div className="icon">
                            <img src={process.env.PUBLIC_URL + '/images/speed.png'} alt="Speed" />
						</div>
						<p>Speed tested to ensure quick loading on all devices</p>
					</div>
				</div>
				<div className="right">
                    <img src={process.env.PUBLIC_URL + '/images/iphone_black_spoke.jpg'} alt="iPhone Mockup" />
				</div>
			</div>
		</div>
	)
}

export default MobileFirst;