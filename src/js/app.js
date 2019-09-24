import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
import { section2HTML } from './sectionsHTML/section2HTML'
import { section3HTML } from './sectionsHTML/section3HTML'
import { initSection3 } from './sectionsJS/section3JS'
import { section4HTML_1_bar } from './sectionsHTML/section4HTML_1_bar'
import { initSection4_1_bar } from './sectionsJS/section4JS_1_bar'
import { section4HTML_2_scatter } from './sectionsHTML/section4HTML_2_scatter'
import { initSection4_2_scatter } from './sectionsJS/section4JS_2_scatter'
import { section4HTML_3_scalesIntro } from './sectionsHTML/section4HTML_3_scalesIntro'

// Section 2
// document.querySelector('body').insertAdjacentHTML('beforeend', section2HTML)

// Section 3
// document.querySelector('body').insertAdjacentHTML('beforeend', section3HTML)
// initSection3()

// Section 4_1_bar
// document.querySelector('body').insertAdjacentHTML('beforeend', section4HTML_1_bar)
// initSection4_1_bar()

// Section 4_2_scatter
document.querySelector('body').insertAdjacentHTML('beforeend', section4HTML_2_scatter)
initSection4_2_scatter()

// document.querySelector('body').insertAdjacentHTML('beforeend', section4HTML_3_scalesIntro)