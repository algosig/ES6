import { Car, Drone } from './classes/index.js'
import {fleet} from './services/fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'

let dataService = new FleetDataService()
dataService.loadData(fleet)

// let car = dataService.getCarByLicense('A5')
// console.log(car)

let cars = dataService.getCarsSortedByLicense();
for (let car of cars)
    console.log(car.license)

// for (let car of dataService.cars) {
//     console.log(car.license)
// }
// for (let e of dataService.errors) {
//     console.log(e.message)
// }