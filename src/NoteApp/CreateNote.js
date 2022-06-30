import React from 'react';
import FormCreate from './FormCreateNote';

function CreateNote() {
	const [showForm, setShowForm] = React.useState(false);
	const onClick = () => setShowForm(true);
	const close = () => setShowForm(false);
	return (
		<div>
			<input type="submit" value="➕ Add Note" onClick={onClick}/>
			{showForm ? <FormCreate/> : null}
		</div>
	)
}

export default CreateNote;