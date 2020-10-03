import React, { useState } from 'react';
import Inventory from './Inventory';
import Storyboard from './Storyboard';
import './Stylesheet.css'
import { story } from './StoryOptions.js';
import { Route } from "react-router-dom"


function Game({ madlib, setMadlib }) {

  const [storyline, setStoryline] = useState(story[0])

  const showButton = (storyline.options.length === 2)

  function ResetPage() {
    setStoryline((currentStory) => {
      return story[0]

    })
  }


  return (
    <>
      <div>
        <Inventory storyline={storyline} />
        <br />
        <Storyboard setStoryline={setStoryline} storyline={storyline} madlib={madlib} setMadlib={setMadlib} />
        <br />
        {showButton && <button className="reset-btn" onClick={() => ResetPage()}>Reset</button>}
      </div >
    </>
  );
}


export default Game;
