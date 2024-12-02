import {createSlice, configureStore} from '@reduxjs/toolkit';


const notifiSlice = createSlice({
    name: 'notification',
    initialState: {
        display: false,
        message: '',
        isLoading: false,
        isError: false
    },
    reducers:{
        showNotification(state, action){
            state.display = true;
            state.message = action.payload.message;
            state.isError = action.payload.isError;
        },
        hideNotification(state){
            state.display = false;
        }
    }
})

const store = configureStore({
    reducer: notifiSlice.reducer
});

export default store;
export const userActions = notifiSlice.actions;