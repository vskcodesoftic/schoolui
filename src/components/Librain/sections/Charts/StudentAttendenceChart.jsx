import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class StudentAttendenceChart extends Component {

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
      <div className=" justify-center items-center">
        <p>Student Attendence</p>
        <Chart options={this.state.options} series={this.state.series} type="donut"   width="380" />
      </div>
    );
  }
}

export default StudentAttendenceChart;