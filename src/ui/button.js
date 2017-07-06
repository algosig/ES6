import {BaseElement} from './base-element.js'

export class Button extends BaseElement {
    constructor(title) {
        super()
        this.title = title
    }
    getElementString() {
        return `
        <button class='mdl-button mdl-js-button mdl-button--raised mdl-button--accent'>
            ${this.title}
        </button>
        `
    }
}