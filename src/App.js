import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route index element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
