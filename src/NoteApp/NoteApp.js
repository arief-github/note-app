import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import FormCreate from './FormCreateNote';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from './data/initialData';

class NoteApp extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
            notes: getInitialData(),
            date: showFormattedDate(),
        };

    	// bind
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
    	const notes = this.state.notes.filter(note => note.id !== id);
    	this.setState( { notes } );
    }

    onAddNoteHandler({ title, description }) {
    	this.setState((prevState) => {
    		return {
    			notes: [
    				{
    					id: +new Date(),
    					title,
    					description
    				}
    			]
    		}
    	})
    }


    render() {
        return (
            <div>
				<h1>Daftar Note</h1>
                <NoteList notes = {this.state.notes} onDelete = {this.onDeleteHandler} />
			</div>
        )
    }
}

export default NoteApp;