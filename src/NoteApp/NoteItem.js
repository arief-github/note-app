import React from 'react';
import NoteBody from './NoteBody';
import NoteActionButton from './ButtonHelper';

function NoteItem({ title, body, id, onDelete, onArchive }) {
	return (
		<div className="note-item">
			<NoteBody title={title} body={body}/>
			<NoteActionButton id={id} onDelete={onDelete} onArchive={onArchive}/>
		</div>
	)
}

export default NoteItem;