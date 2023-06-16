import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import ContainerRoutes from './routes/ContainerRoutes';
import { ToastContainer } from 'react-toastify';
import '../src/services/firebase';
import { requestPermission } from '../src/services/firebase';
import firebase from '../src/services/firebase';

function App() {
  // useEffect(() => {
  //   requestPermission()
  // }, [])
  return (
    <div className="App">
            
      <ContainerRoutes/>
    
  {/* <p>helko</p> */}
  <ToastContainer/>
      </div>
  );
}

export default App;
{/* <div class="header"></div> */ }
{/* <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul class="sidebarMenuInner">
      <li>Jelena Jovanovic <span>Web Developer</span></li>
      <li><a href="https://vanila.io" target="_blank">Company</a></li>
      <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
      <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
      <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
    </ul>
  </div>
  <div id='center' class="main center">
    <div class="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div class="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div class="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
  </div> */}



    {/* 
    
    const [s, setS]=useState("none")
  const onshow = () => {
  setS("block")
  }
    <div class="modal" style={{display: `${s}`}}>
  <div class="modal-background"></div>
  <div class="modal-content">
  <p class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close" onClick={() => setS("none")}></button>
</div>
<button onClick={onshow}>a</button> */}