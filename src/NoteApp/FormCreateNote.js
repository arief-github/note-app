import React from 'react';

class FormCreate extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };
        this.onTextChange = this.onTextChange.bind(this);
        this.onDescTextChange = this.onDescTextChange.bind(this);
        this.onSaveEventHandler = this.onSaveEventHandler.bind(this);
    }

    onTextChange(event) {
        this.setState({ text: event.target.value })
    }

    onDescTextChange(event) {
        this.setState({ desc: event.target.value })
    }

    onSaveEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state.value);
        this.setState(() => {
            return {
                title: '',
                description: '',
            }
        })
    }

    render() {
        return (
            <div>
				<form className="note-input" onSubmit={this.onSaveEventHandler}>
					<label htmlFor="inputText">Title</label>
					<input
						id="inputText"
						type="text"
						required
						value = {this.state.text}
						onChange = {event => this.onTextChange(event)}
					/>
					<label htmlFor="inputDesc">Description</label>
					<input
						id="inputDesc"
						type="text"
						required
						value = {this.state.desc}
						onChange = {event => this.onDescTextChange(event)}
					/>
					<button id="buttonSave" type="submit">
						Save
					</button>
				</form>
			</div>
        )
    }

}

export default FormCreate;