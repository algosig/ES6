import 'jquery';
import { Car, Drone } from './classes/index.js'
import {fleet} from './services/fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'
import { Button } from './ui/button.js'

let b = new Button('click')
b.appendToElement($('body'))