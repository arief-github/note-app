import React from 'react';

function Header({ list1, list2 }) {
    return (
        <header>
	        <nav className = "header__list">
	        	<h1>Notes App</h1>
				<ul>
					<li><a href="">{list1}</a></li>
					<li><a href="">{list2}</a></li>
				</ul>
	        </nav>
		</header>
    )
}

export default Header;