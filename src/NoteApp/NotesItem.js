import React from 'react';
import { showFormattedDate } from './data/initialData';
import { ArchiveIcon, TrashIcon } from '@heroicons/react/solid';

const NotesItem = ({ note, onDelete, onArchived }) => {
	return (
		<div className = 'note-item'>
			<div className="note-item__content">
				<h3 className="note-item__title">{note.title}</h3>
				<p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
				<p className="note-item__body">{note.body}</p>
			</div>
			<div className="note-item__action">
				<button className="note-item__delete-button" onClick={() => onDelete(note.id)}>
					<TrashIcon className="icon"/> Delete
				</button>
				<button className="note-item__archive-button" onClick={() => onArchived(note.id)}>
					<ArchiveIcon className="icon" /> {!note.archived ? 'Archived' : 'Unarchived'}
				</button>
			</div>
		</div>
	)
}

export default NotesItem;