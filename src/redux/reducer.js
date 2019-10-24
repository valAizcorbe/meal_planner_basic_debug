import axios from 'axios'
import {
    ADD_MEAL,
    EDIT_MEAL,
    UPDATE_CATEGORY,
    UPDATE_FORM
} from './actionTypes'

const initialState = {
    category: '',
    title: '',
    image: '',
    description: '',
    favorited: '',
    id: 0
}

export const saveMeal = (
    category,
    title,
    image,
    description,
    favorited,
    id
) => {
    if (id === 0) {
        let data = axios.post('/api/meals', [category, title, image, description, favorited])
                        .then(res => res.data)
        return {
            type: ADD_MEAL,
            payload: data
        }
    } else {
        let data = axios.put(`/api/meals/${id}`, [category, title, image, description, favorited])
                        .then(res => res.data)
        return {
            type: EDIT_MEAL,
            payload: data
        }
    }
}

export const updateForm = (category, title, image, description, favorited, id) => {
    return {
        type: UPDATE_FORM,
        payload: [category, title, image, description, favorited, id]
    }
}

export const updateCategory = (category) => {
    return {
        type: UPDATE_CATEGORY,
        payload: category
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_CATEGORY + '_FULFILLED':
            return { category: payload }
        case UPDATE_FORM + '_FULFILLED':
            return {
                category: payload,
                title: payload,
                image: payload,
                description: payload,
                favorited: payload,
                id: payload 
            }
        case EDIT_MEAL + '_FULFILLED':
            return { category: payload.category }
        case ADD_MEAL + '_FULFILLED':
            return state
        default:
            return state
    }
}