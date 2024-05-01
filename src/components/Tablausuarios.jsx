import { useState } from "react";
import { Arays } from "./Arays";
import FormExample from "./FormExample";

export default function Tablausuarios() {
  const [usuarios, setUsuarios] = useState(Arays);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    alert('hola');
  };
  var link = "https://robohash.org/";
  return (
    <div>
      {console.log(link)}
      {usuarios.map((usuario, index) => (
        <div className="tarjetausuarios">
          <p className="idusuarios"></p>
          <img src={usuario.img} alt="imagen" className="imagenes" />
          <b>
            {usuario.username} id:{index + 1}
          </b>
          <br />
          <br />
          <b>{usuario.name} {usuario.last}</b>
          <br />
          <p className="direccion">Direccion:</p>
          <li>{usuario.address.country}</li>
          <li>{usuario.address.state}</li>
          <li>{usuario.address.city}</li>
          <li>{usuario.address.house}</li>
        </div>
      ))}
      <div>
        
      </div>
    </div>
  );
}
export var index;
