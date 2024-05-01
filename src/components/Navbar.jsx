import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


import Offcanvas from 'react-bootstrap/Offcanvas';
import Tabnavbar from './Tabnavbar'


export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className='navbar-button'>
      <RxHamburgerMenu size={35} />
        </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='Canvasbar'>
          <Offcanvas.Title>Juan H. dev</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Canvasbar'>
          <Tabnavbar/>          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

