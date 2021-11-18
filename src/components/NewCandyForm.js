import React, {useState, useEffect} from 'react'

function NewCandyForm({handleAddCandy}) {
  const[name, setName]=useState("")
  const[img_url, setImg_url]=useState("")
  const[rating, setRating]=useState(0)

  function handleNewName (event) {
    setName(event.target.value)
  }
  // function handleNewImage (event) {
  //   setImg_url(event.target.value)
  // }
  function handleNewRating (event) {
    setRating(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:4001/candies", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name, 
          img_url, 
          rating
        })
      })
    .then(res => res.json())
    .then(newCandy => {
      handleAddCandy(newCandy)
    })
  }

  return (
    <form onSubmit = {handleSubmit}>
        <h3>Add A Candy</h3>

        <label for="name">Name: </label>
        <input type="text" name="name" onChange = {handleNewName} value = {name}/>

        <label for="rating">Rating: </label>
        <input type="text" name="rating" onChange = {handleNewRating} value = {rating}/>

        <input type="submit" name="submit" value="Add Candy" />

    </form>
  );

}

export default NewCandyForm
