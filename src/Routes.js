import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Form from './Components/Form'
import AllMeals from './Components/AllMeals'
import MealCategory from './Components/MealCategory'
import AllFavorites from './Components/AllFavorites'
import CategoryFavorites from './Components/CategoryFavorites'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/meal-form' component={Form} />
        <Route exact path='/meals' component={AllMeals} />
        <Route exact path='/favorites' component={AllFavorites} />
        
        {/* MEAL PLAN ROUTES BY CATEGORY */}
        <Route path='/meals/breakfast' component={MealCategory} />
        <Route path='/meals/lunch' component={MealCategory} />
        <Route path='/meals/dinner' component={MealCategory} />
        <Route path='/meals/dessert' component={MealCategory} />
        <Route path='/meals/snack' component={MealCategory} />

        {/* MEAL PLAN FAVORITES ROUTES BY CATEGORY */}
        <Route path='/favorites/breakfast' component={CategoryFavorites} />
        <Route path='/favorites/lunch' component={CategoryFavorites} />
        <Route path='/favorites/dinner' component={CategoryFavorites} />
        <Route path='/favorites/dessert' component={CategoryFavorites} />
        <Route path='/favorites/snack' component={CategoryFavorites} />
    </Switch>
)