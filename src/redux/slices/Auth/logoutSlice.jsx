import { createSlice } from "@reduxjs/toolkit"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState={
    logout:{
        currentUser: null,
        isFetching: false,
        isLoggedOut: false,
        error:false
    }
}

const logoutSlice= createSlice({
    name:"logout",
    initialState:initialState,
    reducer:{
        logoutStart:(state,action)=>{
            console.log('logout start')
            return {
                ...state,
                logout:{
                    ...state.logout,
                    isFetching:true
                }
            }
        },
        logoutSuccess:(state,action)=>{
            toast.success('Đăng xuất thành công!', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return {
                ...state,
                logout:{
                    ...state.logout,
                    currentUser:null,
                    isFetching:false,
                    isLoggedOut:true,
                    error:false
                }
            }
        },

        logoutFailure:(state,action)=>{
            toast.error('Đăng xuất thất bại !', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return {
                ...state,
                logout:{
                    ...state.logout,
                    isFetching:false,
                    error:true,
                }
            }
        }
    }
})

export const {logoutStart,logoutSuccess,logoutFailure}=logoutSlice.actions
const logoutReducer=logoutSlice.reducer
export default logoutReducer
