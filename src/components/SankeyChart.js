import React, { Component } from 'react'
import Chart from 'react-google-charts'
const sankeyData = [
  ['From', 'To', 'Weight'],
  ['Starting', 'X', 30],
  ['Starting', 'Y', 20],
  ['Y', 'A', 2],
  ['Y', 'B', 9],
  ['Z', 'C', 4],
]
var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
'#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

class SankeyChart extends Component {
  
  render() {
    
    return (
      
      <div className="container mt-5">
        <h2>Christine's Test Chart</h2>
        <Chart
          colors = {colors}
          width={700}
          height={'350px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          rootProps={{ 'data-testid': '' }}
          
          
        />
      </div>
    )
  }
}

export default SankeyChart