import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">HOME</a>
				</li>
				<li>
					<a href="https://nicolassantivanez-aboutme.netlify.app/">ABOUT ME</a>
				</li>
				<li>
					<a href="https://nicolassantivanez-projects.netlify.app/">PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
