import React, { useState } from 'react'

export default function Form({ listNotes, setListNotes }) {
  const [titleNote, setTitleNote] = useState("")
  const [descriptionNote, setDescriptionNote] = useState("")

  const handleTitle = (e) => {
    setTitleNote(e.target.value)
  }

  const handleDescription = (e) => {
    setDescriptionNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (titleNote.trim() === "" || descriptionNote.trim() === "") return
    
    setListNotes([...listNotes, {
      title: titleNote,
      description: descriptionNote
    }])
    
    setTitleNote("")
    setDescriptionNote("")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Ingresa un título' 
          onChange={handleTitle}
          value={titleNote}
          className="form-input"
        />
        <textarea 
          placeholder='Descripción...' 
          onChange={handleDescription}
          value={descriptionNote}
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">Guardar Nota</button>
      </form>
    </div>
  )
}