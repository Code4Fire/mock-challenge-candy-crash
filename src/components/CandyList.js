import React from 'react'
import CandyCard from './CandyCard'

function CandyList({setCandies, handleRemoveCandy}) {
  return (

    <div id="candy-list-container">

      {setCandies.map((candy) => {
        return (
          <CandyCard 
            key = {candy.id} 
            candy = {candy}
            handleRemoveCandy = {handleRemoveCandy}/>
        );
        })}
    </div>

  )
}

export default CandyList
