import React from 'react'
import Notes from './Notes'

export default function ListNotes({ listNotes, deleteNote }) {
  return (
    <div className="notes-list">
      {listNotes.map((note, index) => (
        <Notes 
          key={index}
          title={note.title} 
          description={note.description}
          onDelete={() => deleteNote(index)}
          
        />
      ))}
    </div>
  )
}