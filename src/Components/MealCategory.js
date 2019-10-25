import React, { Component } from "react";
import { connect } from "react-redux";
import { saveMeal } from "../redux/reducer";
import Meal from "./Meal";
import axios from "axios";
import "../App.css";

class MealCategory extends Component {
  constructor() {
    super();
    this.state = {
      meals: []
    };
  }

  componentDidMount() {
    axios.get(`/api/meals/${this.props.mealStore.category}`).then(res => {
      this.setState({
        meals: res.data
      });
    });
  }

  deleteMeal = (id, category) => {
      console.log(id, category)
    axios.delete(`/api/meals/${id}/${category}`).then(res => {
      this.setState({
        meals: res.data
      });
    });
  };

  render() {
    // console.log(this.props.mealStore.category);
    return (
      <div>
        {this.state.meals.map((meal, index) => {
          return (
            <Meal
              deleteMeal={this.deleteMeal}
              meal={meal}
              key={`${meal}: ${index}`}
            />
          );
        })}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    mealStore: state.reducer
  };
}

export default connect(
  mapStatetoProps,
  { saveMeal }
)(MealCategory);
