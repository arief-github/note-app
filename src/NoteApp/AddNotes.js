import React from 'react';

class AddNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: {
                title: '',
                body: '',
            },
            textLength: {
                inputTitle: '',
                limit: 50,
                char: 50,
            }
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        // checking character limit.
        if (event.target.value.length <= 50) {
            this.setState((prevState) => {
                return {
                    textLength: {
                        ...prevState.textLength,
                        inputTitle: event.target.value,
                        char: prevState.textLength.limit - event.target.value.length,
                    },
                    note: {
                        ...prevState.note,
                        title: event.target.value,
                    },
                }
            });
        }
    }

    onBodyChangeHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                note: {
                    ...prevState.note,
                    body: event.target.value,
                }
            }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.setState((prevState) => {
            return {
                note: {
                    title: '',
                    body: ''
                },
                textLength: {
                    ...prevState.textLength,
                    inputTitle: '',
                    char: 50
                }
            }
        })
    }

    render() {
    	return (
    		<div className='note-input'>
    			<h2>Make A Note 📝</h2>
    			<form onSubmit = {this.onSubmitHandler}>
    				<p className={`note-input__title__char-limit ${this.state.textLength.char === 0 ? 'zero' : ''}`}>Character Remaining : {this.state.textLength.char}</p>
    				<input type="text" className="note-input__title" value={this.state.note.title} onChange={this.onTitleChangeHandler} placeholder="Title." required/>
    				<textarea className="note-input__body" value={this.state.note.body} onChange={this.onBodyChangeHandler} placeholder="type here." required />
    				<button type="submit"> ➕Add Note</button>
    			</form>
    		</div>
    	)
    }
}

export default AddNotes;