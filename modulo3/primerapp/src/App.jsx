import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import ListNotes from './components/ListNotes'
import Header from './Header'

function App() {
  const [listNotes, setListNotes] = useState([])

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []
    setListNotes(storedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(listNotes))
  }, [listNotes])

  const deleteNote = (index) => {
    const updatedNotes = listNotes.filter((_, i) => i !== index)
    setListNotes(updatedNotes)
  }

  return (
    <>
      <Header fullname="Ezequiel Campos" saludo="¡Hola!" />
      <div className='container'>
        <section className="form-section">
          <h2>Registrando Notas</h2>
          <Form listNotes={listNotes} setListNotes={setListNotes} />
        </section>
        <section className="notes-section">
          <h2>Notas</h2>
          <ListNotes listNotes={listNotes} deleteNote={deleteNote} />
        </section>
      </div>
    </>
  )
}

export default App