// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     login: {
//         currentUser: null,
//         isFetching: false,
//         error: false,
//         isLoggedIn: false
//     },
//     register: {
//         // currentUser:null,
//         isFetching: false,
//         error: false,
//         isRegister: false
//     }
// }
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialState,
//     reducers: {
//         loginStart: (state) => {
//             state.login.isFetching = true
//         },
//         loginSuccess: (state, action) => {
//             // state.login.isFetching=false,
//             // state.login.currentUser=action.payload,
//             // state.login.isLoggedIn=true,
//             // state.login.error=false
//             console.table(action.payload)
//             return {
//                 ...state, login: {
//                     ...state.login,
//                     currentUser: action.payload,
//                     isLoggedIn: true,
//                     error: false,
//                     isFetching: false
//                 }
//             }
//         },
//         loginFailure: (state) => {
//             // state.login.isFetching=false,
//             // state.login.error=true,
//             // state.login.isLoggedIn=false
//             return {
//                 ...state, login: {
//                     ...state.login,
//                     error: true,
//                     isFetching: false,
//                     isLoggedIn: false
//                 }
//             }

//         },

//         // register
//         registerStart: (state) => {
//             state.register.isFetching = true
//         },
//         registerSuccess: (state, action) => {
//             return {
//                 ...state, register: {
//                     ...state.register,
//                     // currentUser:action.payload,
//                     isRegister: true,
//                     error: false,
//                     isFetching: false
//                 }
//             }
//         },
//         registerFailure: (state) => {
//             return {
//                 ...state, register: {
//                     ...state.register,
//                     error: true,
//                     isFetching: false,
//                     isRegister: false
//                 }
//             }
//         }
//     }
// })

// export const { loginStart,
//     loginSuccess,
//     loginFailure,
//     registerFailure,
//     registerSuccess,
//     registerStart } = authSlice.actions
// const authReducer = authSlice.reducer
// export default authReducer