import React from 'react';
import './assets/styles/App.css';
import UserRoutes from './routes/UserRoutes';
import UserLayout from './layouts/ParentLayouts/UserLayout';
import AdminRoutes from './routes/AdminRoutes';
import AdminManagementLayout from './layouts/ParentLayouts/AdminManagementLayout';
import StudentJudgeForm from './components/StudentJudgeForm';
import ContainerRoutes from './routes/ContainerRoutes';
import { ToastContainer,toast } from 'react-toastify';
import { useSelector } from 'react-redux';
function App() {
  // const isLoggedIn= useSelector((state)=>state.login.login?.isLoggedIn)
  // if(isLoggedIn) {
  //   console.log("app said login: ",isLoggedIn)
  //   // toast.success("Đăng nhập thành công")
  // }
  return (
    <div className="App">
      
      <ContainerRoutes/>
    <ToastContainer/>
        </div>
  );
}

export default App;
