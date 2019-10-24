import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Landing() {
    return (
        <div>
            <h2>Welcome to Meal Planner App</h2>
            <Link to='/meals'>
                <button>See All Meals</button>
            </Link>
            <Link to='/add-meal'>
                <button>Add a Meal</button>
            </Link>
            {/* <Link to='/favorites'>
                <button>Favorites</button>
            </Link> */}
        </div>
    )
}