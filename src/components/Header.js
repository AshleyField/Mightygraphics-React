import React from 'react'
import {Link} from 'react-router-dom';


function Header(){
	return (

		<div className="header">
			<div className="header-inner mobile-header">
				<div className="logo">
					<img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Mightygraphics Logo" />
				</div>
				<nav className="sidenav" data-state="closed">
					<div className="close-btn nav-close">
						<img src="images/menu_close.svg" alt="" />
					</div>
					<ul>
						<li><Link to="/" className="active">Home</Link></li>
						<li><Link to="/Work">Work</Link></li>
						<li><Link to="/About">About</Link></li>
						<li><Link to="/Contact">Contact</Link></li>
					</ul>
				</nav>
				<div className="open-btn nav-open">
					<img src="images/menu_open.svg" alt="Menu Button" />
				</div>
			</div>

			<div className="header-inner desktop-header">
				<div className="logo">
					<img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Mightygraphics Logo" />
				</div>
				<nav>
					<ul>
						<li><Link to="/" className="active">Home</Link></li>
						<li><Link to="/Work">Work</Link></li>
						<li><Link to="/About">About</Link></li>
						<li><Link to="/Contact">Contact</Link></li>
					</ul>
				</nav>
			</div>

		</div>
	)
}

export default Header;