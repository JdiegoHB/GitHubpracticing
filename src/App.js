import "./components/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

import Samples from "./components/Samples.jsx";
import Sumaresta from "./components/Sumaresta.jsx";
import Task from "./components/Task.jsx";
import Navbar from "./components/Navbar.jsx";
import Counter from "./components/Counter.jsx";
import Tablausuarios from "./components/Tablausuarios.jsx";
import Slider from "./components/Slider.jsx";
import AlertForm from './components/AlertForm.jsx'
import Forumario from './components/Forumario.jsx'
import { Arays, Arays as data } from './components/Arays.jsx'


<Forumario newUser/>
function App() {
  const [ tasks, setTasks] = useState();
  
  useEffect(() => {
    setTasks(data);
  }, [])
  function createUser(newTask) {
    if (newTask.address && newTask.address.country && newTask.address.state && newTask.address.city && newTask.address.house) {
      setTasks([...Arays, newTask]);
      alert("Usuario agregado correctamente");
    } else {
      alert("El usuario debe tener una dirección completa");
    }
  }
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
            <Tablausuarios tasks={tasks}/>
          </details>
        </div>
        <div>
          <Slider />
        </div>
        <br></br>
        <div className="bloks-">
          <AlertForm createUser={createUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
