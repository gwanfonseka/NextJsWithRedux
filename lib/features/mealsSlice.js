import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_PATH = 'http://localhost:3001';

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: []
    },
    reducers: {
        setMeals(state, action) {
            state.meals = action.payload
        }
    }
})

export const { setMeals } = mealsSlice.actions;

export const initializeMeals = () => {
    return async (dispatch) => {
        const meals = await axios.get(`${BASE_PATH}/dummyMeals`);
        try {
            dispatch(setMeals(meals.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export default mealsSlice.reducer;