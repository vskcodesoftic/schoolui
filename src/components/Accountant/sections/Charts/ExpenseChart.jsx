import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class ExpenseChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
        labels: ['Books and Uniforms', 'Rent', 'Misleanous' , 'Donations']

      },
      series: [20, 55, 25, 35],
    }
  }


  render() {

    return (
      <div className=" justify-center items-center">
        <p>Expense Chart</p>
        <Chart options={this.state.options} series={this.state.series} type="donut"   width="380" />
      </div>
    );
  }
}

export default ExpenseChart;