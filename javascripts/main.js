import {initialDisplay} from './components/calculator.js'
import attachEvents from './helpers/buttonEvents.js'


const initializeApp = () => {
    attachEvents();
    initialDisplay();
};

initializeApp();