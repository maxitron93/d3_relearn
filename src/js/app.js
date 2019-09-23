import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
import { section2HTML } from './sectionsHTML/section2HTML'
import { section3HTML } from './sectionsHTML/section3HTML'
import { initSection3 } from './sectionsJS/section3JS'

// Section 2
// document.querySelector('body').insertAdjacentHTML('beforeend', section2HTML)

// Section 3
document.querySelector('body').insertAdjacentHTML('beforeend', section3HTML)
initSection3()