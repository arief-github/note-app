import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { getInitialData } from './data/initialData';
import NotesActive from './NotesActive';
import NotesArchived from './NotesArchived';

class NotesApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
		}

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchivedHandler = this.onArchivedHandler.bind(this);
	}

	onDeleteHandler(id) {
		const filteredNotes = this.state.notes.filter((note) => note.id !== id);
		this.setState({
			notes: filteredNotes,
		});
	}

	onArchivedHandler(id) {
		this.setState((prevState) => {
			notes: prevState.notes.map((note) => note.id === id ? 
			{
			...note,
			archived: !note.archived,
			} : note)
		})
	}


	render() {
		return (
			<div>
				<Header/>
				<NotesActive notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/>
				<NotesArchived notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/>
				<Footer/>
			</div>
		)
	}
}

export default NotesApp;