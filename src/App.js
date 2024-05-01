import "./components/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import Samples from "./components/Samples.jsx";
import Sumaresta from "./components/Sumaresta.jsx";
import Task from "./components/Task.jsx";
import Navbar from "./components/Navbar.jsx";
import Counter from "./components/Counter.jsx";
import Tablausuarios from "./components/Tablausuarios.jsx";
import Slider from "./components/Slider.jsx";
import AlertForm from './components/AlertForm.jsx'
import Forumario from './components/Forumario.jsx'


<Forumario newUser/>
function App() {
  const [ arreglo, setarreglo] = useState()
  
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <br />
        <div className="bloks-">
          <Sumaresta />
          <Task />
          <Counter variable />
          <Samples />
        </div>
        <div className="bloks-usuarios">
          <details>
            <summary>Usuarios</summary>
            <Tablausuarios />
          </details>
        </div>
        <div>
          <Slider />
        </div>
        <br></br>
        <div className="bloks-">
          <AlertForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
