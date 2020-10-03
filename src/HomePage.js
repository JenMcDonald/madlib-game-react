import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Game from './Game';
import ship from './ship.jpg'
import './Stylesheet2.css'

export default function HomePage({ madlib, setMadlib }) {

    useEffect(() => {
        localStorage.setItem("formSubmission", JSON.stringify(madlib));
    }, [madlib])

    useEffect(() => {
        if (!localStorage.getItem("formSubmission")) {
            return;
        } else {
            setMadlib({ ...(JSON.parse(localStorage.getItem("formSubmission"))) });
        }
    }, [])

    function handleChange({ target }) {
        const updatedMadlib = { ...madlib, [target.name]: target.value };
        setMadlib(updatedMadlib);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setMadlib("");
        console.log("JEN");
    }


    return (
        <div className="homepage-text">
            <h1> Welcome to Jen's Madlib Text Adventure Game </h1>
            <p> Please answer a couple of questions, then we can get started! </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nickname:
                       <input className="input"
                        type="text"
                        name="nickname"
                        value={madlib.nickname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Favourite Drink:
                       <input className="input"
                        type="text"
                        name="drink"
                        value={madlib.drink}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Battle Cry:
                       <input className="input"
                        type="text"
                        name="sound"
                        value={madlib.sound}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <Link to="/game">
                    <input className="submit" type="submit" value="Let's Get Started" />
                </Link>
            </form>
        </div >
    )
}