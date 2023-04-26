import React from 'react';
import './assets/styles/App.css';
import UserRoutes from './routes/UserRoutes';

import UserLayout from './layouts/UserLayout';
import AdminManagementLayout from './layouts/AdminManagementLayout';
import AdminRoutes from './routes/AdminRoutes';
import StudentJudgeForm from './components/StudentJudgeForm';
function App() {
  return (
    <div className="App">
     
      {/* <UserLayout children={<UserRoutes/>}/> */}
      {/* <AdminManagementLayout children={<AdminRoutes/>} /> */}
      <StudentJudgeForm/>
        </div>
  );
}

export default App;
