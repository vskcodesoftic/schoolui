import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class IncomeChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
        labels: ['Sationary', 'Fees', 'Donations']

      },
      series: [20, 55, 28 ],
    }
  }

  render() {

    return (
      <div className=" justify-center items-center">
        <p>Income Chart</p>
        <Chart options={this.state.options} series={this.state.series} type="donut"   width="380" />
      </div>
    );
  }
}

export default IncomeChart;