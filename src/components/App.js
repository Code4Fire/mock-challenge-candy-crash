import React, {useState, useEffect} from 'react'
import '../App.css';
import Header from './Header'
import CandySearch from './CandySearch'
import NewCandyForm from './NewCandyForm'
import CandyList from './CandyList'
import FullMoon from './FullMoon'

function App() {
  const [candies, setCandies] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState(" ")

  const handleSearch = candies.filter((candy) => {
    return candy.name.toLowerCase().includes(userSearchInput.toLowerCase());
  });

  useEffect(() => {
    fetch("http://localhost:4001/candies")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setCandies(data);
  });
}, []);

  function handleAddCandy(newCandy) {
    setCandies([...candies, newCandy])
  }

  function handleRemoveCandy(candyGone) {
    const updatedCandies = candies.filter((candy) => {
      return candy.id !== candyGone.id
    })
    return setCandies(updatedCandies);
  }

  return (
    <div className="App">
      <FullMoon />
      <Header />
      <CandySearch userSearchInput = {userSearchInput} setUserSearchInput = {setUserSearchInput} />
      <NewCandyForm candies= {candies} handleAddCandy={handleAddCandy}/>
      <CandyList candies = {candies} setCandies = {handleSearch} handleRemoveCandy = {handleRemoveCandy}/>
    </div>
  );
}

export default App;
