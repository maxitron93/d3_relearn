import * as d3 from 'd3'
import { data4_1_bar } from './data'

const initSection4_1_bar = () => {
    let svgWidth = 500
    let svgHeight = 400
    let barSpacing = 4
    let barWidth = svgWidth / data4_1_bar.length - barSpacing

    // Create an svg area in the chart area
    let svg = d3.select('#chart')
                .append('svg')
                .style('width', '100%')
                .style('height', '100%')
                

    // Load in the rects with the data binded to them
    svg.selectAll('rect')
    .data(data4_1_bar) // Put the dataset in the 'waiting room', waiting for div elements to be loaded
    .enter()
    .append('rect') // load in a rect for each datapoint
    .attr('x', (dataPoint, index) => {
        return `${index * (svgWidth / data4_1_bar.length)}px`
    })
    .attr('y', (dataPoint) => {
        return `${svgHeight - dataPoint * 5}px`
    })
    .attr('width', () => {
        return `${barWidth}px`
    })
    .attr('height', (dataPoint) => {
        return `${dataPoint * 5}px`
    })
    .style('fill', 'rgb(100, 200, 100)')

    // Load in texts with the data binded to them
    svg.selectAll('text')
    .data(data4_1_bar)
    .enter()
    .append('text') // load in a text for each datapoint
    .text((dataPoint) => {
        return dataPoint
    })
    .attr('x', (dataPoint, index) => {
        let xPos = index * (svgWidth / data4_1_bar.length) + barWidth / 2
        return `${xPos}px`
    })
    .attr('text-anchor', 'middle')
    .attr('y', (dataPoint) => {
        return `${(svgHeight - dataPoint * 5) + 15}px`
    })
    .attr('font-size', '12px')
    .attr('fill', 'white')
}

export {
    initSection4_1_bar
}
