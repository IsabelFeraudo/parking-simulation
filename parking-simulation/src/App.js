import React, { useState } from 'react'
import Table from './components/Table'
import SimulacionFormulario from './components/Form'
import Project from './simulation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([])
  const [totalRevenue, avgProfit] = useState(0)

  const handleSimulacion = formValues => {
    const {simulationNumberOfLines, line_since, simulationNumberOfLinesToShow } = formValues
    const project = new Project()
    project.NUMBER_OF_LINES = numberOfLines
    project.LINE_SINCE = line_since
    project.NUMBER_OF_LINES_TO_SHOW = numberOfLinesToShow

    project.start()
    const results = project.getResults()
    setData(results)

    // Calcular la variable estadistica

  }
//Modificar variableEstadistica={variableEstadistica} con lo correspondiente
  return (
    <div className="App">
      <h1>Simulación de Estacionamiento</h1>
      <Form onSubmit={handleSimulation} />
      {data.length > 0 && <Table data={data} variableEstadistica={variableEstadistica} />}
    </div>
  )
}

export default App