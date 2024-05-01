import { useState } from "react"
import { IoIosDoneAll } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import "./styles/task.css"

export default function Task() {
    var [tarea, settarea] = useState(false)
  return (
    <div className="cards">
    

    <p className={tarea ? "green" : "red"}>
   {tarea ? <IoIosDoneAll size={35}/> : <IoIosClose size={35}/>}
   {tarea ? "Completada" : "Pendiente"}
</p>

    </div>
  )
}
