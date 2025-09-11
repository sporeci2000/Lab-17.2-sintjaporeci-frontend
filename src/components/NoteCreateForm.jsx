import { useState } from 'react';
import { createNote } from '../utilities/notes-api';

export default function NoteCreateForm({ setNotes }) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await createNote(formData, setNotes);
            setFormData({ title: '', content: '' })
        } catch (error) {
            console.error(error);
        }
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter a Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Enter Content'
                name='content'
                value={formData.content}
                onChange={handleChange}
            />
            <input type='submit' />
        </form>
    );
}