import React from 'react'

export default function Menu({ icone, text }) {
  
  return (
    <div className="flex-col click">
      <button className="flex my-4 px-6 items-center ">
        <div> {icone} </div>
        <h2 className="text-lg font-bold texto">{text}</h2>
      </button>
    </div>
  )
}
