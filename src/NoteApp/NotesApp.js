import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { getInitialData } from './data/initialData';
import AddNotes from './AddNotes';
import NotesActive from './NotesActive';
import NotesArchived from './NotesArchived';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchNotes: getInitialData(),
        }

        this.onAddToLocalStorage = this.onAddToLocalStorage.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date,
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ],
                searchNotes: [
                    ...prevState.searchNotes,
                    {
                        id: +new Date,
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }

                ]
            }
        })
    }


    onDeleteHandler(id) {
        const filteredNotes = this.state.notes.filter((note) => note.id !== id);
        const filteredSearchNotes = this.state.searchNotes.filter((note) => note.id !== id);
        this.setState({
            notes: filteredNotes,
            searchNotes: filteredSearchNotes,
        });
    }

    onArchivedHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note),
                searchNotes: prevState.searchNotes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note)
            }
        })
    }

    onSearchHandler(event) {
        this.setState((prevState) => {
            return {
                searchNotes: prevState.notes.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase()))
            }
        })
    }

    onAddToLocalStorage({ title, body }) {
        this.onAddNoteHandler({ title, body })
    }

    render() {
        return (
            <div>
                {localStorage.setItem('NOTES_ITEM', JSON.stringify(this.state.notes))}
                <Header onSearch={ this.onSearchHandler }/>
                <div className='notes-app__body'>
                    <AddNotes addNote = {this.onAddToLocalStorage}/>
                    <NotesActive notes={this.state.searchNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/>
                    <NotesArchived notes={this.state.searchNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default NotesApp;