import { createSlice } from "@reduxjs/toolkit"

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        latitude: null,
        longitude: null,
        state: null,
        district: null,
        pincode: null,
    },
    reducers: {
        setLatitude: (state, action) => {
            state.latitude = action.payload;
            console.log(state.latitude);
        },
        setLongitude: (state, action) => {
            state.longitude = action.payload;
            console.log(state.longitude);
        },
        setState: (state, action) => {
            state.state = action.payload;
            console.log(state.state);
        },
        setDistrict: (state, action) => {
            state.district = action.payload;
            console.log(state.district);
        },
        setPincode: (state, action) => {
            state.pincode = action.payload;
            console.log(state.pincode);
        }
    }
})

export const { setLatitude, setLongitude, setState, setDistrict, setPincode } = locationSlice.actions;
export default locationSlice.reducer;