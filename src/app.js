import 'jquery';
import { Car, Drone } from './classes/index.js'
import { fleet } from './services/fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'
import { Button } from './ui/button.js'
import { Image } from './ui/image.js'
import { TitleBar } from './ui/title-bar.js'
import { DataTable } from './ui/data-table.js'

let tb = new TitleBar('Application')
tb.addLink('Home','')
tb.addLink('Drones','')
tb.addLink('Cars','')
tb.addLink('About','')
tb.appendToElement($('body'))

let i = new Image('src/image/drone.jpg')
i.appendToElement($('body'))

let b = new Button('click')
b.appendToElement($('body'))

let headers = "License Make Model Miles".split(' ')
let dataService = new FleetDataService()
dataService.loadData(fleet)

let dt = new DataTable(headers, dataService.cars)
dt.appendToElement($('body'))

