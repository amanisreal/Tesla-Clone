import  {createSlice} from "@redux/toolkit";
import carReducer from "../fea/"

const initialState = {
    cars: [" Model S", " Model 3", " Model X", " Model Y"]
}

const caeSkice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default createSlice.reducer
