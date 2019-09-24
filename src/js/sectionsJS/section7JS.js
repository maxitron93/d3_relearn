import * as d3 from 'd3'
import usJSON from './us_continental'
// Cool link: http://geojson.io

const initSection7 = () => {
    let chartWidth = 600
    let chartHeight = 400
    // console.log(JSON.stringify(usJSON))

    // Projection - responsible for positioning and scaling the map drawn
    let projection = d3.geoAlbersUsa()
    // Make the map smaller or larger. The default value is 1000
    projection.scale([chartWidth])
    // Center the map 
    projection.translate([chartWidth/2, chartHeight/2])

    let path = d3.geoPath().projection(projection)

    // Create the svg area
    let svg = d3.select('#chart')
                .append('svg')
                .attr('width', chartWidth)
                .attr('height', chartHeight)

    // Display the map to the screen
    svg.selectAll('path')
        .data(usJSON.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', '#58CCE1')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
}

export {
    initSection7
}
