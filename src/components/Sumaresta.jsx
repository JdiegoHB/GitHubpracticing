import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export default function Sumaresta() {
  const [juan, setJuan] = useState(0);
  return (
    <div>
      <div className="cards sumaresta-card">
        <Button variant="danger" onClick={(e) => juan<=-5?alert("Limite"):setJuan(juan - 1)}>
          -
        </Button>
        {""}
        {juan}
        <Button variant="success" onClick={() => juan>=5?alert("limite"):setJuan(juan+1)}>
          +
        </Button>{" "}
      </div>
    </div>
  );
}
