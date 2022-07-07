import React from 'react';
import { ArchiveIcon } from '@heroicons/react/solid';

const NotesNotFound = () => {
	return (
		<div className="notes-list__empty-message">
			<ArchiveIcon className="icon"/> <p>Not Found or Empty</p>
		</div>
	)
}

export default NotesNotFound;