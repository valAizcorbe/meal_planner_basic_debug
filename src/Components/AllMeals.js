import React from 'react'
import { connect } from 'react-redux'
import { updateCategory } from '../redux/reducer'
import '../App.css';

function AllMeals(props) {
    return (
        <div>
            <button onClick={() => {
                props.updateCategory('breakfast')
                props.history.push('/meals/breakfast')
            }}>Breakfast</button>
            <button onClick={() => {
                props.updateCategory('lunch')
                props.history.push('/meals/lunch')
            }}>Lunch</button>
            <button onClick={() => {
                props.updateCategory('dinner')
                props.history.push('/meals/dinner')
            }}>Dinner</button>
            <button onClick={() => {
                props.updateCategory('dessert')
                props.history.push('/meals/dessert')
            }}>Dessert</button>
            <button onClick={() => {
                props.updateCategory('snack')
                props.history.push('/meals/snack')
            }}>Snack</button>
        </div>
    )
}

function mapStatetoProps(state) {
    return {
        mealStore: state.reducer
    }
}

export default connect(mapStatetoProps, {updateCategory})(AllMeals)