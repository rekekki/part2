<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
=======
import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  // const [notes, setNotes] = useState([]) Starting with empty notes list.
  // In that case the component does not use props, so those should be omitted.

  const addNote = (event) => {
    // default behaviour is to render the whole page. This is to prevent that
>>>>>>> 29b5305d04c9e3857718caa5bd0b57c08db73bb2
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
<<<<<<< HEAD
      id: notes.length + 1,
=======
      id: notes.length +1
>>>>>>> 29b5305d04c9e3857718caa5bd0b57c08db73bb2
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

<<<<<<< HEAD
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

=======
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
  
>>>>>>> 29b5305d04c9e3857718caa5bd0b57c08db73bb2
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
<<<<<<< HEAD
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
=======
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
>>>>>>> 29b5305d04c9e3857718caa5bd0b57c08db73bb2
    </div>
  )
}

export default App