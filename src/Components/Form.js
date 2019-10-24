import React, {Component} from 'react'
import { connect } from 'react-redux'
import { saveMeal } from '../redux/reducer'
import '../App.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: this.props.mealStore.category,
            title: this.props.mealStore.title,
            image: this.props.mealStore.image,
            description: this.props.mealStore.description,
            favorited: this.props.mealStore.favorited,
            id: this.props.mealStore.id
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const {category, title, image, description, favorited, id} = this.state
        return (
            <div>
                <h1>Let's Add a Meal</h1>
                <div>
                    Category: <input name='category' value={category} onChange={e => this.handleChange(e)} maxLength='100'/>
                    Title: <input name='title' value={title} onChange={e => this.handleChange(e)} maxLength='100'/>
                    Image URL: <input name='image' value={image} onChange={e => this.handleChange(e)} maxLength='3000'/>
                    Description: <textarea name='description' value={description} onChange={e => this.handleChange(e)} maxLength='3000'/>
                </div>
                <button onClick={ () => {
                    this.props.saveMeal(category, title, image, description, favorited, id)
                    this.props.history.push(`/meals/${this.props.mealStore.category}`)
                }}>Save Meal!</button>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        mealStore: state.reducer
    }
}

export default connect(mapStatetoProps, {saveMeal})(Form)

