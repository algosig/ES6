import 'jquery';
import { Car, Drone } from './classes/index.js'
import { fleet } from './services/fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'
import { TitleBar } from './ui/title-bar.js'
import { DataTable } from './ui/data-table.js'
import {GoogleMap} from './ui/google-map.js'
import { HomePage } from './home-page.js'
import { CarsPage } from './cars-page.js'
import { ApplicationBase } from './framework/application-base.js'

export class App extends ApplicationBase {
    constructor() {
        super('Fleet Manager')
        this.dataService = new FleetDataService()
        this.dataService.loadData(fleet)

        this.addRoute('Home', new HomePage(), true)
        this.addRoute('Cars', new CarsPage())
        this.addRoute('Drones', null)
        this.addRoute('Map', null)

    }
}
export let application = new App()
application.show($('body'))
// application.shwo($('body'))
// let tb = new TitleBar('Application')
// tb.addLink('Home','')
// tb.addLink('Drones','')
// tb.addLink('Cars','')
// tb.addLink('About','')
// tb.appendToElement($('body'))

// let i = new Image('src/image/drone.jpg')
// i.appendToElement($('body'))

// let b = new Button('click')
// b.appendToElement($('body'))

// let headers = "License Make Model Miles".split(' ')


// let dt = new DataTable(headers, dataService.cars)
// dt.appendToElement($('body'))

// let centreOfMap={lat: 40.777777, lng:-73.989898}
// let map = new GoogleMap(centreOfMap, dataService.cars )
// map.appendToElement($('body'))

