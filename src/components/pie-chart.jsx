import React from 'react'
import ReactDOM from 'react-dom'
import c3 from 'c3'

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type: 'pie',
        columns: this.props.items
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.items
    });
  }

  render() {
    return (
      <div ref="chart"></div>
    )
  }
}

PieChart.PropTypes = {
  items: React.PropTypes.array
}

export default PieChart;