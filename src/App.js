import React from 'react';
import './assets/styles/App.css';
import ProjectRoute from './routes/ProjectRoutes';

import Layout from './layouts';
function App() {
  return (
    <div className="App">
      {/* <Layout>
      <ProjectRoute/>
      </Layout>
      */}
      <Layout children={<ProjectRoute/>}/>
        </div>
  );
}

export default App;
