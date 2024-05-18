/*Probando commit*/
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { Arays } from "./Arays";
import { useState } from "react";

export default function FormExample({ createUser }) {
  const { Formik } = formik;
  var link = "https://robohash.org/";
  const [usuarios, setUsuarios] = useState(Arays);

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    Country: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        var nameimp = document.getElementById("nameinput").value;
        var lastimp = document.getElementById("lastnameinput").value;
        var userimp = document.getElementById("usernameinput").value;
        var Countryimp = document.getElementById("Countryinput").value;
        var stateimp = document.getElementById("stateinput").value;
        var cityimp = document.getElementById("cityinput").value;
        var zipimp = document.getElementById("zipcodeinput").value;
        var imgvar = link + userimp;
        var infoForm = {
          id: Arays.length,
          name: nameimp,
          lastName: lastimp,
          username: userimp,
          address: {
            country: Countryimp,
            state: stateimp,
            city: cityimp,
            house: zipimp,
          },
          img: imgvar,
        };
        createUser(infoForm);
        setUsuarios([...usuarios, infoForm]);
        Arays.push(infoForm);
        console.log(usuarios);
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        Country: "",
        state: "",
        city: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                placeholder="name"
                id="nameinput"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                placeholder="lastname"
                id="lastnameinput"
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  id="usernameinput"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="Country"
                value={values.Country}
                onChange={handleChange}
                isInvalid={!!errors.Country}
                id="Countryinput"
              />

              <Form.Control.Feedback type="invalid">
                {errors.Country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
                id="stateinput"
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>city</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
                id="cityinput"
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
                id="zipcodeinput"
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
export var infoForm;
