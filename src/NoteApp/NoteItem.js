import React from 'react';
import NoteBody from './NoteBody';
import NoteActionButton from './ButtonHelper';

function NoteItem({ title, body, id, onDelete }) {
	return (
		<div className="note-item">
			<NoteBody title={title} body={body}/>
			<NoteActionButton id={id} onDelete={onDelete}/>
		</div>
	)
}

export default NoteItem;