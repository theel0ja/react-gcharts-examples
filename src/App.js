import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class App extends Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <h1>Google Charts examples</h1>

        <div>
          <h3>GeoChart</h3>
          <Chart
            chartType="GeoChart"
            rows={[
              ["Canada", 3],
              ["Russia", 4],
              ["United States", 5],
              ["United Kingdom", 5]
            ]}
            columns={[
              {
                  "type": "string",
                  "label" : "Country"
              }, {
                  "type": "number",
                  "label": "Students"
              }
            ]}
            options={{}}
            graph_id="ScatterChart"
            width="800px"
            height="500px"
            mapsApiKey="AIzaSyBjedOpjw2800hMcpkQDoNIS8RsEvSkRho"
            legend_toggle={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
