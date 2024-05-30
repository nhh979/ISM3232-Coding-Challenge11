// Hoang Nguyen 
// U12840485

function main() {
    var dataArray = [100, 420, 230, 850, 560, 925];
    var svgWidth = 500, barHeight = 20, margin = 1, 
        svgHeight = (barHeight + margin)*dataArray.length

    // Define the SVG's dimensions   
    var svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

}