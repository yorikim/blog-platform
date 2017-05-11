import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    if (!__CLIENT__) return;

    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type: 'pie',
        columns: this.props.items
      }
    });
  }

  componentWillUnmount() {
    if (!__CLIENT__) return;

    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (!__CLIENT__) return;

    this.chart.load({
      columns: nextProps.items
    });
  }

  render() {
    return (
      <div ref="chart"></div>
    );
  }
}

PieChart.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default PieChart;