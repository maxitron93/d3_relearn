import * as d3 from 'd3'
import { data4_2_scatter } from './data'

const initSection4_2_scatter = () => {
    const chartWidth = 500
    const chartHeight = 400
    const padding = 70

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

    let aScale = d3.scaleSqrt()
    aScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
        return dataPoint[2]
    })])
    aScale.range([0, 25])



    // Create x and y axis
    let xAxis = d3.axisBottom() // axisTop is for changing the side of the tick labels
    xAxis.scale(xScale) // Can pass-in xScale
    xAxis.ticks(5) // Determine the number of ticks
    // xAxis.tickValues([0, 400]) // Set the tick values
    xAxis.tickFormat((dataPoint) => {
        return dataPoint + '.00'
    })

    let yAxis = d3.axisLeft()
    yAxis.scale(yScale)
    yAxis.ticks(5)
    yAxis.tickFormat((dataPoint) => {
        return dataPoint + '%'
    })



    // Render x and y axis
    svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(0,' + (chartHeight - 60) + ')')
    .call(xAxis)
    
    svg.append('g')
    .attr('class', 'y-axis')
    .attr('transform', 'translate(45,0)')
    .call(yAxis)


    // Create circles
    svg.append('g').selectAll('circle')
    .data(data4_2_scatter)
    .enter()
    .append('circle')
    .attr('cx', (dataPoint, index) => {
        return xScale(dataPoint[0])
    })
    .attr('r', (dataPoint, index) => {
        return aScale(dataPoint[2])
    })
    .attr('cy', (dataPoint) => {
        return yScale(dataPoint[1])
    })
    .attr('fill', '#D1AB0E')



    // Create labels
    svg.append('g').selectAll('text') // Need to do .append('g') so the 'text' in the axis isn't selected
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
        return  yScale(dataPoint[1]) - aScale(dataPoint[2]) - 5
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
}

export {
    initSection4_2_scatter
}
