import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateForm } from "../redux/reducer";
import "../App.css";

class Meal extends Component {
  componentDidUpdate(prevProps) {
    if (this.prevProps !== this.props.meal) {
      this.render();
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.meal.title}</div>
        <img src={this.props.meal.image} alt="pic of food" />
        <div>{this.props.meal.description}</div>
        <button
          onClick={() => {
            this.props.updateForm(
              this.props.meal.category,
              this.props.meal.title,
              this.props.meal.image,
              this.props.meal.description,
              this.props.meal.favorited,
              this.props.meal.id
            );
            this.props.history.push("/meal-form");
          }}
        >
          Edit
        </button>
        <button
          onClick={() =>
            this.props.deleteMeal(this.props.meal.id, this.props.meal.category)
          }
        >
          Delete
        </button>
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
  { updateForm }
)(withRouter(Meal));
