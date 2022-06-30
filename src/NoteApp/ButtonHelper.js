import React from 'react';

function NoteActionButton({ id, onDelete }) {
	return (
	<>
		<button className = "note-item__delete-button" onClick={() => onDelete(id)}> Delete </button>
		<button className = "note-item__archive-button">Archive</button>
	</>
	)
}


export default NoteActionButton;