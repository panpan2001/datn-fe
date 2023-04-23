import React from 'react';
import './assets/styles/App.css';
import ProjectRoute from './routes/ProjectRoutes';

import MainLayout from './layouts/mainLayout';
function App() {
  return (
    <div className="App">
     
      <MainLayout children={<ProjectRoute/>}/>
        </div>
  );
}

export default App;
