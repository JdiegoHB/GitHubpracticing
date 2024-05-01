import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabnavbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home" >
        <h1>home</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h2>Profile</h2>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <h3>Loooonger Tab?</h3>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Tabnavbar;