import React, {useState} from 'react'

// const defaultImage = "https://www.candywarehouse.com/core/media/media.nl?id=111668&c=322133&h=9JsjKPGDMmrYKxtTsBf9bBU5AVa2bAGqnWUkshBEbEY9zwEF&resizeid=103&resizeh=320&resizew=320"

function CandyCard({id, candy, handleRemoveCandy}) {
  const { name, img_url, rating} = candy
  const [like, setLike] = useState(true);
  // const likeStatus = like ? "active": "";
  const likeButton = like ? "Like" : "Unlike";

  function handleLikeClick(){
    setLike(!like);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:4001/candies/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      handleRemoveCandy(candy);
    });
  }

  return (
    <div className="candy-card">

      <h3>{name}</h3>

      <img src={img_url} alt={name} />

      <h4>Rating: {rating}</h4>

      <button type= "button" onClick = {handleLikeClick}>{likeButton}</button>
      <button type= "button" onClick = {handleRemoveCandy}>DELETE ME</button>
    </div>
  )
}

export default CandyCard
