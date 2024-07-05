import { NUMBER_OF_LINES } from './components/Form'

class Project {
  constructor(numberOfLines) {
    this.NUMBER_OF_LINES = numberOfLines
    this.results = []
    this.driversQuantity = 0 // Contador para la cantidad total conductores atendidos
    this.totalRevenue = 0
    this.avgProfit =0
  }
  start() {
    const data = {
      eventQueue: [],
      carsQueue: [],
      revenue: 0,
      driversQuantity: 0,
    }

    this.initializeEvents(data)

    for (let line = 1; line < this.NUMBER_OF_LINES; line++) {
      const inminentEvent = this.findNextEvent(data)

      inminentEvent.eventHappens(data)

      const lineData = {
        clock: inminentEvent.clock,
        event: inminentEvent.constructor.name,
        driversID: inminentEvent.driversID,
        carsQueue: [...data.carsQueue],
        eventQueue: data.eventQueue.map(event => ({
          clock: event.time,
          clock: event.constructor.name,
          nroCliente: event.nroCliente,
        })),
      }
//hasta aca
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

  eventHappens(data) {
   logica
  }
}*/



export default Project