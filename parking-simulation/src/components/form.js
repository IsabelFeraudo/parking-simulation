import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
export const NUMBER_OF_LINES = 'NUMBER_OF_LINES';


const Form = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    numberOfLines: 60,
    lineSince: 0,
    numberOfLinesToShow: 100,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: Number(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="cantidadFilasASimular">
              <Form.Label>CANTIDAD_DE_FILAS_A_SIMULAR</Form.Label>
              <Form.Control type="number" name="numberOfLinesr" value={formValues.numberOfLines} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="filaASimularDesde">
              <Form.Label>FILA_A_SIMULAR_DESDE</Form.Label>
              <Form.Control type="number" name="lineSince" value={formValues.lineSince} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="numberOfLinesToShow">
              <Form.Label>CANTIDAD_FILAS_A_MOSTRAR</Form.Label>
              <Form.Control type="number" name="numberOfLinesToShow" value={formValues.numberOfLinesToShow} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Comenzar Simulación
        </Button>
      </Form>
    </Container>
  );
};

export default Form;