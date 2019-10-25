import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateCategory } from "../redux/reducer";
import "../App.css";

function Header(props) {
  //console.log(props);
  return (
    <div>
      <h2>Meal Planner App</h2>
      <button
        onClick={() => {
          props.updateCategory("");
          props.history.push("/meal-form");
        }}
      >
        Add a Meal
      </button>
      <Link to="/meals">
        <button>All Meals</button>
      </Link>
      {/* <Link to='/favorites'>
                <button>Favorites</button>
            </Link> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mealStore: state.reducer
  };
}

export default connect(
  mapStateToProps,
  { updateCategory }
)(withRouter(Header));
