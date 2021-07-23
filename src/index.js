import ReactDOM from 'react-dom'
import App from './App.js'
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'))
=======
import axios from 'axios'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// This is to show how map function works. It generates a new array from previous ones.
// It is important to assign a key to newly generated arrays.
const result = notes.map(note => note.id)
console.log(result)

//This is how to access data on server. Get and then are methods.

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
})
>>>>>>> 29b5305d04c9e3857718caa5bd0b57c08db73bb2
