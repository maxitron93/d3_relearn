import * as d3 from 'd3'
import loadCSVData from './data.csv'

const initSection3 = () => {
    ////////// Selecting elements //////////
    let bodyEL = d3.select('body')
    let pEL = d3.selectAll('p')
    console.log(bodyEL)
    console.log(pEL)


    ////////// Modifying elements //////////
    ////////// Transformation methods //////////
    // Add attributes to an element
    let pFirst = d3.select('p')     
    pFirst.attr('class', 'foo')
    pFirst.attr('class', 'bar') // Replaced old class
    pFirst.classed('foo', true) // Add 'foo' class to the element 
    pFirst.text('Hello World')
    console.log(pFirst)
    pFirst.style('color', 'blue') // Change text color


    ////////// Binding data //////////
    // Create a dummy dataset
    let dataset = [10, 20, 30, 40, 50, 60, 70, 80]
    
    // Select the elements and bind the dataset to those elements (even if the elements don't exist yet)
    let dataEl = d3.select('.data-area').selectAll('p').data(dataset) 
    
    // Load in the elements with the data binded to them
    dataEl.enter()
    .append('p') // Create a <p> for each datapoint
    .text((data) => { // Add text according to the data
        if(data < 35) {
            return `It's cold outside: ${data}`
        } else {
            return `It's hot outsude: ${data}`
        }
    }).style('color', (data) => { // Change color according to data
        if(data < 35) {
            return 'blue'
        } else {
            return 'red'
        }
    }).style('background-color', (data) => {
        if(data < 35) {
            return 'grey'
        } else {
            return 'yellow'
        }
    }).style('width', (data) => {
        return `${data * 15}px`
    })


    ////////// Load data from a csv file //////////
    // Need to import loadCSVData
    // Also need to add csv file loader in webpack.config
    // This will load from /dist/csv/
    const getData = async () => {
        // Get the data from the csv file
        let csvData = await d3.csv('/csv/data.csv')

        // Select the elements and bind the dataset to those elements (even if the elements don't exist yet)
        let dataEl2 = d3.select('.data-area-2').selectAll('p').data(csvData.columns) 
        
        // Load in the elements with the data binded to them
        dataEl2.enter()
        .append('p') // Create a <p> for each datapoint
        .text((data) => { // Add text according to the data
            if(data < 35) {
                return `It's cold outside: ${data}`
            } else {
                return `It's hot outsude: ${data}`
            }
        }).style('color', (data) => { // Change color according to data
            if(data < 350) {
                return 'blue'
            } else {
                return 'red'
            }
        }).style('background-color', (data) => {
            if(data < 350) {
                return 'grey'
            } else {
                return 'yellow'
            }
        }).style('width', (data) => {
            return `${data}px`
        })
    }
    
    // Perform the function
    getData()
}

export {
    initSection3
}
