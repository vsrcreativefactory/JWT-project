import { configureStore } from "@reduxjs/toolkit"
import userReducer from 'features/user'


export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})


const initialState = {
    first: {
        second: {
            third: {
                valOne: '',
                valTwo: '',
                isAuthenticated: false
            },
            fifth: 'asdf'
        },
        fourth: 'asdf'
    },
    sixth: 'asdfgh'
}

switch (isAction.type) {
    case 'LOGIN_SUCCESS':
        state.first.second.third.isAuthenticated = true;
        return {
            ...state,
            first: {
                ...state.first,
                second: {
                    ...state.first.second,
                    third: {
                        ...state.first.second.third,
                        isAuthenticated: true
                    }
                }
            }
        }
}