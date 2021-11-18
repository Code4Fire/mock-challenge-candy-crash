import React from 'react'

function CandySearch({userSearchInput, setUserSearchInput}) {

  return (
      <div id="candy-search">

        <label for="search">Search: </label>

        <input type="text" name="search" onChange = {(e) => setUserSearchInput(e.target.value)} value = {userSearchInput}/>

      </div>
  )

}

export default CandySearch
