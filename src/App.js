import React, { useState, useEffect } from 'react'
import HomePage from './HomePage';
import Game from './Game';
import { Route, Router, Switch } from 'react-router-dom'

export default function App() {

    const [madlib, setMadlib] = useState(
        {
            nickname: "",
            drink: "",
            sound: ""
        }
    );

    useEffect(() => {
        window.onunload = () => {
            window.localStorage.clear()
        };
    }, [])


    return (
        <Switch>
            <Route path="/game" >
                <Game madlib={madlib} setMadlib={setMadlib} />
            </Route>
            <Route path="/" >
                <HomePage madlib={madlib} setMadlib={setMadlib} />
            </Route>
        </Switch>
    )
}
