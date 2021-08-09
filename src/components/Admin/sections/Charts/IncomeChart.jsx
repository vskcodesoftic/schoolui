import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class IncomeChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
        labels: ['Books And Uniform Sales', 'Rent', 'Miscelianous', 'Donation']

      },
      series: [44, 55, 41, 17],
    }
  }

  render() {

    return (
      <div className="">
                  <p>Revenue</p>
        <Chart options={this.state.options}  series={this.state.series} type="pie" width="350"  />
      </div>
    );
  }
}

export default IncomeChart;