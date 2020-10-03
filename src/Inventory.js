import React, { useState } from 'react'
import { story } from './StoryOptions.js';
import Storyboard from './Storyboard';
import './Stylesheet.css'

export default function Inventory({ storyline }) {



    return (
        <div className="inventory_container">
            <h1>Inventory</h1>
            <div className="inventory">
                Inventory: {storyline.inventory}
            </div>
        </div>
    )
}
