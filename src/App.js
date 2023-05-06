import React from 'react';
import './assets/styles/App.css';
import UserRoutes from './routes/UserRoutes';
import UserLayout from './layouts/ParentLayouts/UserLayout';
import AdminRoutes from './routes/AdminRoutes';
import AdminManagementLayout from './layouts/ParentLayouts/AdminManagementLayout';
import StudentJudgeForm from './components/StudentJudgeForm';
import ContainerRoutes from './routes/ContainerRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div className="App">
      
      <ContainerRoutes/>
    <ToastContainer/>
        </div>
  );
}

export default App;
