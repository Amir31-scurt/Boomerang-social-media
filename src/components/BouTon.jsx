import React from 'react'
export default function BouTon({classis, bouty, contenu}) {
  

    return (
      <div className={`${classis}`}>
        <button className={`${bouty}`}>
          <p className="text-white font-bold text-xl pb-1">{contenu}</p>
        </button>
      </div>
    )

}  


