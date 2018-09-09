import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

export class Chart extends Component {
  average = (data) => {
    return _.round(_.sum(data)/data.length);
  };

  render () {
    return(
      <div>
        <Sparklines data={this.props.data} width={250} height={180}>
          <SparklinesBars color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(this.props.data)}</div>
      </div>
    )
  }
}

export default Chart;