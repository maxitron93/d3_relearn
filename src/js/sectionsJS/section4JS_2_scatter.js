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
    .attr('cy', (dataPoint) => {
        return yScale(dataPoint[1])
    })
    .attr('r', (dataPoint, index) => {
        return aScale(dataPoint[2])
    })
    .attr('fill', (dataPoint) => {
        if (dataPoint[3] === 'cat') {
            return 'red'
        } else {
            return 'green'
        }
    })



    // Create labels
    svg.append('g').selectAll('text') // Need to do .append('g') so the 'text' in the axis isn't selected
    .data(data4_2_scatter)
    .enter()
    .append('text')
    .attr('class', 'circle-label')
    .text((dataPoint) => {
        return `${dataPoint[0]}, ${dataPoint[1]}, ${dataPoint[3]}`
    })
    .attr('x', (dataPoint, index) => {
        return xScale(dataPoint[0])
    })
    .attr('y', (dataPoint, index) => {
        return  yScale(dataPoint[1]) - aScale(dataPoint[2]) - 5
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')



    // Add Reverse Data click event
    d3.select('#button').on('click', () => {
        // Simulate data change (reverse)
        data4_2_scatter.reverse() 

        // Redraw the circles
        svg.selectAll('circle')
        .data(data4_2_scatter)
        .transition() // Add a transition. Order matters. Doesn't work if it's at the end.
        .duration(1000) // Transition with 1 second duration
        .ease(d3.easeElasticOut) // Specify transition motion
        .delay((dataPoint, index) => {
            return index / data4_2_scatter.length * 500
        }) // Add delay depending on index
        .attr('cx', (dataPoint, index) => {
            return xScale(dataPoint[0])
        })
        .attr('cy', (dataPoint) => {
            return yScale(dataPoint[1])
        })
        .attr('fill', (dataPoint) => {
            if (dataPoint[3] === 'cat') {
                return 'red'
            } else {
                return 'green'
            }
        })

        // Redraw the text
        svg.selectAll('.circle-label')
        .data(data4_2_scatter)
        .transition() // Add a transition. Order matters. Doesn't work if it's at the end.
        .duration(1000) // Transition with 1 second duration
        .ease(d3.easeElasticOut) // Specify transition motion
        .delay((dataPoint, index) => {
            return index / data4_2_scatter.length * 500
        }) // Add delay depending on index
        .text((dataPoint) => {
            return `${dataPoint[0]}, ${dataPoint[1]}, ${dataPoint[3]}`
        })
        .attr('x', (dataPoint, index) => {
            return xScale(dataPoint[0])
        })
        .attr('y', (dataPoint, index) => {
            return  yScale(dataPoint[1]) - aScale(dataPoint[2]) - 5
        })

    })

    // Add New Data click event
    d3.select('#button-add').on('click', () => {
        data4_2_scatter.push([
            Math.floor(Math.random() * 500), 
            Math.floor(Math.random() * 400), 
            Math.floor(Math.random() * 250), 
            'dog'])

        // Update the x and y domains
        xScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
            return dataPoint[0]
        })])
        yScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
            return dataPoint[1]
        })])
        aScale.domain([0, d3.max(data4_2_scatter, (dataPoint) => {
            return dataPoint[2]
        })])

        // Redraw the circles
        svg.selectAll('circle')
        .data(data4_2_scatter)
        .enter()
        .append('circle')
        .attr('cx', (dataPoint, index) => {
            return xScale(dataPoint[0])
        })
        .attr('cy', (dataPoint) => {
            return yScale(dataPoint[1])
        })
        .attr('r', (dataPoint, index) => {
            return aScale(dataPoint[2])
        })
        .attr('fill', (dataPoint) => {
            if (dataPoint[3] === 'cat') {
                return 'red'
            } else {
                return 'green'
            }
        })
        

        // Redraw the text
        svg.selectAll('.circle-label') // Need to do .append('g') so the 'text' in the axis isn't selected
        .data(data4_2_scatter)
        .enter()
        .append('text')
        .attr('class', 'circle-label')
        .text((dataPoint) => {
            return `${dataPoint[0]}, ${dataPoint[1]}, ${dataPoint[3]}`
        })
        .attr('x', (dataPoint, index) => {
            return xScale(dataPoint[0])
        })
        .attr('y', (dataPoint, index) => {
            return  yScale(dataPoint[1]) - aScale(dataPoint[2]) - 5
        })
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')

        // Add hover event. Need to add one after new data points are created so it applies to all circles - need to find a better way of doing this
        d3.selectAll('circle')
        .on('mouseover', function() {
            console.log(this)
            d3.select(this)
            .attr('fill', 'black')
            
        })
        .on('mouseout', function() {
            d3.select(this)
            .attr('fill', 'red')
        })
    })

    // Add hover event
    d3.selectAll('circle')
    .on('mouseover', function() {
        console.log(this)
        d3.select(this)
        .attr('fill', 'black')
        
    })
    .on('mouseout', function() {
        d3.select(this)
        .attr('fill', 'red')
    })
}

export {
    initSection4_2_scatter
}
