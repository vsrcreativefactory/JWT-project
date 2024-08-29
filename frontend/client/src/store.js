import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {},
})

// const initialState = {
//     first: {
//         second: {
//             third: {
//                 valOne: '',
//                 valTwo: '',
//                 isAuthenticated: false
//             },
//             fifth: 'asdf'
//         },
//         fourth: 'asdf'
//     },
//     sixth: 'asdfgh'
// }

// switch (isAction.type) {
//     case 'LOGIN_SUCCESS':
//         state.first.second.third.isAuthenticated = true;
//         return {
//             ...state,
//             first: {
//                 ...state.first,
//                 second: {
//                     ...state.first.second,
//                     third: {
//                         ...state.first.second.third,
//                         isAuthenticated: true
//                     }
//                 }
//             }
//         }
// }