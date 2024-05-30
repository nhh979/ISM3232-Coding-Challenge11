// Hoang Nguyen 
// U12840485

function main() {
    var dataArray = [100, 420, 230, 850, 560, 925];
    var svgWidth = 500, barHeight = 20, margin = 1, 
        svgHeight = (barHeight + margin)*dataArray.length

    // Define the SVG's dimensions   
    var svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

    // Create a linear scale for x-axis
    var xScale = d3.scaleLinear()
                        .domain([d3.min(dataArray), d3.max(dataArray)])
                        .range([50, svgWidth])

    // Create groups
    var group = svg.selectAll('g')
                        .data(dataArray)
                        .enter().append('g')
                        .attr('transform', function(d,i) {return `translate(0, ${i *(barHeight + margin)})`})                     
    // Create a bar for each group
    group.append('rect')
            .attr('width', 0)         
            .attr('height', barHeight - margin)
            .attr('fill', 'firebrick')
                //Create event listeners
            .on('mouseover', function() {
                d3.select(this).attr('fill','yellowgreen')})
            .on('mouseout', function() {
                d3.select(this).attr('fill','firebrick')})
                // Add transition effect
            .transition().duration(1000)
            .attr('width', function(d) {return xScale(d)})
          
    // Create text for each group
    group.append('text')
            .attr('x', function(d) {return xScale(d)})
            .attr('y', barHeight / 2)
            .attr('dy', '0.35em')
            .text(function(d) {return d})

}