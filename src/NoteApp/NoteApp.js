import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import FormCreate from './FormCreateNote';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from './data/initialData';



const NotesHandler = (props) => {
     const initialState = {
          notes: getInitialData(),
     }
 
     const [noteData, setNoteData] = useState(initialState);
     const [searchText, setSearchText] = useState('');
 
     const onDeleteHandler = id  =>  {
          const notes = noteData.notes.filter(note => note.id !==id);
          setNoteData({ notes });
     }
 
 
    const onAddNoteHandler = ({ archived, title, id, body}) => {
         setNoteData((prevState) => {
               return {
                    notes: [
                         ...prevState.notes,
                         {
                              archived: false,
                              body,
                              createdAt: new Date().toISOString(),
                              id: +new Date(),
                              title,
                         }
                    ]
               }
          });
     }
 
     const onArchieveHandler = (id) => {
          const noteArchive = noteData.notes.findIndex((note) => note.id === id)
          noteData.notes[noteArchive].archived  = !noteData.notes[noteArchive].archived;
          return setNoteData(noteArchive);
     }
 
          return (
            <div>
                 {(noteData.notes.length === 0) ? (
                              <p>There's no notes here</p>
                    ) : <NoteList notes={noteData.notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()))} onDelete= {onDeleteHandler} onArchive = {onArchieveHandler}/>}
            </div>
                
          )
}


export default NotesHandler;