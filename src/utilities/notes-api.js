export async function getNotes() {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER_ORIGIN + '/api/notes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function createNote(formData, setState) {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER_ORIGIN + '/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
        const notes = await getNotes();
        setState(notes);
    } catch (error) {
        console.error(error);
    }
}