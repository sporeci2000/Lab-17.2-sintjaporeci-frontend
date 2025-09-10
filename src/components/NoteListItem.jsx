export default function NoteListItem({ note }) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}