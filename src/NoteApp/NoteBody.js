import React from 'react';

function NoteBody({ title, body }) {
	return (
		<div className="note-item__content">
			<h2 className="note-item__content">{title}</h2>
			<p className="note-item__body">{body}</p>
		</div>
	)
}

export default NoteBody;