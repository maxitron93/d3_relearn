import * as d3 from 'd3'
import { data4_2_scatter } from './data'

const initSection4_2_scatter = () => {
    const chartWidth = 500
    const chartHeight = 400
    const padding = 50

    // Create SVG element
    let svg = d3.select('#chart')
                .append('svg')
                .attr('width', '100%')
                .attr('height', '100%')

    // Create scales
    let xScale = d3.scaleLinear()
    xScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
        return dataPoint[0]
    })])
    xScale.range([padding, chartWidth - padding])

    let yScale = d3.scaleLinear()
    yScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
        return dataPoint[1]
    })])
    yScale.range([chartHeight - padding, padding]) // Reversing the range values 'flips' the chart so it reads bottom to top
    
    // Create circles
    svg.selectAll('circle')
    .data(data4_2_scatter)
    .enter()
    .append('circle')
    .attr('cx', (dataPoint, index) => {
        return xScale(dataPoint[0])
    })
    .attr('r', (dataPoint, index) => {
        return dataPoint[2] / 10
    })
    .attr('cy', (dataPoint) => {
        return yScale(dataPoint[1])
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
        return xScale(dataPoint[0])
    })
    .attr('y', (dataPoint, index) => {
        return  yScale(dataPoint[1]) - dataPoint[2] / 10 - 5
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
}

export {
    initSection4_2_scatter
}
