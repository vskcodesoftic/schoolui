import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class AccountantAttendenceChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
        labels: ['Present', 'Leave', 'Absent']

      },
      series: [20, 55, 25],
    }
  }


  render() {

    return (
      <div className="">
        <p>Accountant Attendence Chart</p>
        <Chart options={this.state.options} series={this.state.series} type="donut"   width="355" />
      </div>
    );
  }
}

export default AccountantAttendenceChart;