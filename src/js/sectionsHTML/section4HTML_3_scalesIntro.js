import * as d3 from 'd3'

// Creaate dummy data
let slices = [100,200,300,400,500]

// Create a new scale
let scale = d3.scaleLinear() 

// Set the input domain
scale.domain([d3.min(slices), d3.max(slices)])

// Set the output range
scale.range([10,350]) 



const section4HTML_3_scalesIntro = `
    <h1>Scales Intro</h1>
    <p>${scale(450)}</p>
    <p>${scale(200)}</p>
    <p>${scale(1000)}</p>
    <p>${scale(10)}</p>
`

export {
    section4HTML_3_scalesIntro
}