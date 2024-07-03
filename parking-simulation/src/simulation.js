import { NUMBER_OF_LINES } from './components/Form'

class Project {
  constructor(initialX, numberOfLines) {
  }

  comenzarEjecucion() {
    const data = {
      eventQueue: [],
      carsQueue: [],
      att1: 0,
      att2: 0,
    }

    this.initializeEvents(data)

    for (let line = 1; line < this.NUMBER_OF_LINES; line++) {
      const eventoInminente = this.encontrarEventoMasProximo(data)

      eventoInminente.ocurreEvento(data)

      const lineData = {
        clock: eventoInminente.clock,
        event: eventoInminente.constructor.name,
        nroCliente: eventoInminente.nroCliente,
        stock: data.stock,
        empleadosLibres: data.empleadosLibres,
        carsQueue: [...data.carsQueue],
        eventQueue: data.eventQueue.map(event => ({
          clock: event.tiempo,
          clock: event.constructor.name,
          nroCliente: event.nroCliente,
        })),
      }

      if (line >= this.LINE_SINCE && line < this.LINE_SINCE + this.NUMBER_OF_LINES_TO_SHOW) {
        this.results.push({ ...lineData, lineNumber: line })
      }
    }
  }

  findNextEvent(data) {
    const foundEvent = data.eventsQueue.reduce(
      (minEvent, event) => (event.clock < minEvent.clock ? event : minEvent),
      data.eventsQueue[0]
    )

    data.eventQueue = data.eventQueue.filter(event => event !== foundEvent)

    return foundEvent
  }

  initializeEvents(data) {
    data.eventQueue.push(new Event1(, ))

    if (data.stock === 0) {
      data.eventQueue.push(new Event2(, ))
    } else {
      data.eventQueue.push(new Event3(0))
    }
  }

  getResults() {
    return this.resultados
  }
}

/*class EventoGenerico {
  constructor(tiempoActual, param2) {
    this.tiempoActual = calculo tiempo actual
    this.param2 = param2 o calculo
  }

  ocurreEvento(data) {
   logica
  }
}*/



export default Project