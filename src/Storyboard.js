import React, { useState, useEffect } from 'react';
import { story } from './StoryOptions.js';
import Inventory from './Inventory';
import './Stylesheet.css'

export default function Storyboard({ storyline, setStoryline, madlib, setMadlib }) {

    function nextPage(optionNumber) {
        setStoryline((currentStory) => {
            if ((currentStory.options[optionNumber].nextText) === 0) {
                return story[0]
            }
            else {
                return story[(currentStory.options[optionNumber].nextText) - 1];
            }
        })
    }





    function replaceDefaultStrings(storyline) {
        if (!localStorage.getItem("formSubmission")) {
            return storyline;
        } else {
            storyline = storyline.replaceAll("Captain", madlib.nickname).replaceAll("CAPTAIN", madlib.nickname.toUpperCase()).replaceAll("tequila", madlib.drink.toLowerCase()).replaceAll("yippee", madlib.sound);
            return storyline;
        }
    }


    return (
        <>
            <div className="story_container" >
                <div className="storyText">
                    {replaceDefaultStrings(storyline.text)}
                </div>
                <br />
                <div className="btn_layout">
                    <button className="btn"
                        onClick={() => nextPage(0)}>
                        {replaceDefaultStrings(storyline.options[0].text)}
                    </button>
                    {storyline.options[1] && <button className="btn"
                        onClick={() => nextPage(1)}>
                        {replaceDefaultStrings(storyline.options[1].text)}
                    </button>}
                </div>
            </div >
        </>
    )
}

