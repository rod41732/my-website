import React from 'react';
import Home from "./routes/home/home";
import "./style.css"
function App() {
  return (
    <div>
      <nav>
        <ul class="nav-bar">
          <li class="nav-item logo">Rod41732</li>
          <li class="nav-item">Etc</li>
          <li class="nav-item">Home</li>
          <li class="nav-item">Math</li>
          <li class="nav-item">Dev</li>
        </ul>
      </nav>
      <Home/>
    </div>
  );
}

export default App;
