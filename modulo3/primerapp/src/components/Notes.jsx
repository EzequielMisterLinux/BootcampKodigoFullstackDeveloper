import React from 'react'

export default function Notes({ title, description, onDelete }) {
  return (
    <div className='note-card'>
      <h2 className='note-title'>{title}</h2>
      <p className='note-description'>{description}</p>
      <button onClick={onDelete} className="delete-button">Eliminar</button>
    </div>
  )
}