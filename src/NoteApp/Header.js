import React from 'react';

const Header = ( { onSearch } ) => {
	return (
		<div className = "note-app__header">
			<h1>Notes App</h1>
			<div className='note-app__searchButton'>
				<input type="text" placeholder="Search Note ..."/>
			</div>
		</div>
	)
}

export default Header;