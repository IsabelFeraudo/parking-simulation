import React, { useState } from 'react'
import Table from './components/Table'
import SimulacionFormulario from './components/Form'
import Project from './simulation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([])
  const [varEstadistica1, setVarEstadistica] = useState(0)

  const handleSimulacion = formValues => {
    const { valorInicial, simulationNumberOfLines, line_since, simulationNumberOfLinesToShow } = formValues
    const project = new Project()
    project.VALOR_INICIAL_1 = valorInicial
    project.NUMBER_OF_LINES = numberOfLines
    project.LINE_SINCE = line_since
    project.NUMBER_OF_LINES_TO_SHOW = numberOfLinesToShow

    project.start()
    const results = project.getResults()
    setData(results)

    // Calcular la variable estadistica
    /*const clientesTotales = resultados.length
    const clientesTristes = resultados.filter(fila => fila.evento === 'FinCoccionHorno').length
    const porcentaje = (clientesTristes / clientesTotales) * 100
    seprojectorcentajeClientesTristes(porcentaje)*/
  }

  return (
    <div className="App">
      <h1>Simulación de Estacionamiento</h1>
      <SimulacionFormulario onSubmit={handleSimulacion} />
      {datos.length > 0 && <SimulacionTabla data={datos} variableEstadistica={variableEstadistica} />}
    </div>
  )
}

export default App