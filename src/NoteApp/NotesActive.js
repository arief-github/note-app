import React from 'react';
import NotesItem from './NotesItem';
import NotesNotFound from './NotFoundNotes';

const NotesActive = ({ notes, onDelete, onArchived }) => {
    const filteredNotes = !notes.length ? [] : notes.filter((note) => note.archived === false);

    return (
        <div>
			<h2> 📌 Active Notes </h2>
			{
				filteredNotes.length === 0 ? (
					<NotesNotFound/>
				) : (
				 <div className = 'notes-list'>
				 	{
				 		filteredNotes.map((note, id) => {
				 			return (
				 				<NotesItem key={id} note={note} onDelete={onDelete} onArchived={onArchived} />
				 			);
				 		})
				 	}
				 </div>
				)
			}
		</div>

    )
}

export default NotesActive;