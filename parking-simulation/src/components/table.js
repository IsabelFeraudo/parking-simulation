import React from 'react';
import { Table, Container } from 'react-bootstrap';

const SimulacionTabla = ({ data,porcentajeClientesTristes }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fila</th>
            <th>Reloj</th>
            <th>Evento</th>
            <th>Rnd llegada</th>
            <th>T entre llegadas</th>
            <th>Prox. llegada</th>
            <th>Rnd</th>
            <th>T. estacionamiento</th>
            <th>Fin estacionamiento(i)</th>
            <th>Rnd tamaño</th>
            <th>tamaño vehiculo</th>
            <th>fin Cobro</th>
            <th>Estado empleado</th>
            <th>Cola Clientes</th>
            <th>Estado playa</th>
            <th>Disp. S. Grande</th>
            <th>Disp. S. Pequeño</th>
            <th>Disp. S. Utilitarios</th>
            <th>Eventos en Cola</th>
            <th>Cantidad Conductores</th> {/* Nueva columna para la cantidad de conductores */}
            <th>Recaudacion</th> 
            <th>Estado conductor</th> 
          </tr>
        </thead>
        <tbody>
          {data.map((line, index) => (
            <tr key={index}>
              <td>{line.number}</td>
              <td>{line.clock}</td>
              <td>{line.event}</td>
              <td>{line.rndArrival}</td>
              <td>{line.timeBetweenArrivals}</td>
              <td>{line.nextArrival}</td>
              <td>{line.rndParking}</td>
              <td>{line.parkingTime}</td>
              <td>{line.endParking}</td>
              <td>{line.rndSize}</td>
              <td>{line.size}</td>
              <td>{line.endCharging}</td>
              <td>{line.employeeState}</td>

              <td>{line.clientQueue.join(', ')}</td>
             
              <td>{line.parkinglotState}</td>
              <td>{line.bigPlacements}</td>
              <td>{line.smallPlacements}</td> 
              <td>{line.utilsPlacements}</td> 
              <td>
                {line.eventQueue.map((event, idx) => (
                  <div key={idx}>
                    {event.event} (Tiempo: {event.time}, Cliente: {event.driverID})
                  </div>
                ))}
              </td>
              <td>{line.driversQuantity}</td> 
              <td>{line.driversQuantity}</td>
              <td>{line.revenue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      // Mostrar los resultados esperados al finalizar la simulación 
      <p>Porcentaje de clientes tristes: {totalRevenue.toFixed(2)}%</p>
      <p>Ganancia promedio por auto: {avgProfit.toFixed(2)}%</p>
    </Container>
   
  );
};

export default Table;