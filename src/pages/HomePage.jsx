import { useState, useEffect } from 'react';
import { getNotes } from '../utilities/notes-api';
import NoteList from "../components/NoteList";
import NoteCreateForm from '../components/NoteCreateForm';

export default function HomePage() {
    const [notes, setNotes] = useState(null); // => [ null, f(x) ]

    useEffect(() => {
        getNotes().then(data => setNotes(data));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <NoteCreateForm setNotes={setNotes} />
            <NoteList notes={notes} />
        </div>
    );
}