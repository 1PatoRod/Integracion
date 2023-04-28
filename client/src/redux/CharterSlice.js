import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    charactOfficial: [],
    charact: [],
    charDetail: {},
    currentPage: 1,
    location: [],
}

const Slice = createSlice({
    name: 'characts',
    initialState,
    reducers: {
        allCharacts: (state, action) => {
            state.charactOfficial = action.payload;
            state.charact = action.payload;
        },
        clearCharact: (state, action) => {
            state.charact = action.payload;
        },
        charterDetail: (state, action) => {
            state.charDetail = action.payload;
        },
        clearCharDetail: (state, action) => {
            state.charDetail = action.payload;
        },
        searchCharacter: (state, action) => {
            state.charact = action.payload;
        },
        setCurrent: (state, action) => {
            state.currentPage = action.payload;
        },
        filters: (state, action) => {
            state.charact = action.payload;
        },
        locations: (state, action) => {
            state.location = action.payload;
        },
    }});

    export const { allCharacts, clearCharact, charterDetail, clearCharDetail, searchCharacter, setCurrent, filters, locations } = Slice.actions;
    export default Slice.reducer;