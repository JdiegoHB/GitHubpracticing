import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import Samples from "./Samples";

export default function Counter({props, variable}) {
  var [number, setNumber] = useState(0);
  var [name, setName] = useState("");
  var variale = name;
  return (
    <div className="cards counter-card">
      <input
        type="text"
        className="inputs"
        onChange={(e) => {
          setNumber(e.target.value.length);
          setName(e.target.value);
          props=name;
        }}
      />
      <p className="inputs">{number}</p>
      <button className="inputs">
        <IoMdCloudUpload size={25} />
      </button><br /><br />
      <Samples hola={variale}/>
    </div>
  );
}
