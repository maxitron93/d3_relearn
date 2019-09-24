import * as d3 from 'd3'
import { data4_2_scatter } from './data'

const initSection4_2_scatter = () => {
    const chartWidth = 500
    const chartHeight = 400

    // Create SVG element
    let svg = d3.select('#chart')
                .append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
    
    // Create circles
    svg.selectAll('circle')
    .data(data4_2_scatter)
    .enter()
    .append('circle')
    .attr('cx', (dataPoint, index) => {
        return dataPoint[0]
    })
    .attr('r', (dataPoint, index) => {
        return dataPoint[2]
    })
    .attr('cy', (dataPoint) => {
        return chartHeight - dataPoint[1]
    })
    .attr('fill', '#D1AB0E')

    // Create labels
    svg.selectAll('text')
    .data(data4_2_scatter)
    .enter()
    .append('text')
    .text((dataPoint) => {
        return `${dataPoint[0]}, ${dataPoint[1]}`
    })
    .attr('x', (dataPoint, index) => {
        return dataPoint[0]
    })
    .attr('y', (dataPoint, index) => {
        return chartHeight - dataPoint[1] - dataPoint[2] - 5
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
}

export {
    initSection4_2_scatter
}
