import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  // const [notes, setNotes] = useState([]) Starting with empty notes list.
  // In that case the component does not use props, so those should be omitted.

  const addNote = (event) => {
    // default behaviour is to render the whole page. This is to prevent that
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length +1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const handleNoteChange  = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  //The function onClick in button includes a tertiary operator.
  //If the condition is true, then show what comes after the question mark.
  //Else show what comes after colon.
  
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>            
      <ul>                     
        {notesToShow.map(note =>
        <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}> 
        <input value={newNote}
        onChange={handleNoteChange} 
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App