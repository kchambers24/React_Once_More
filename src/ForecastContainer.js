import React, { Component } from 'react';
import {getForcast} from './Api'
import Forecast from './Forecast'

class ForecastContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }
  componentDidMount() {
    var self = this;
    this.makeRequest(this.props.routeParams.city);
    getForcast(this.state.city)
    .then(function(response) {
      self.setState({
        isLoading: false,
        forecastData: response
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  makeRequest(city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  }

  render() {
    return (
      <Forecast
      city={this.props.routeParams.city}
      isLoading={this.state.isLoading}
      forecastData={this.state.forecastData} />
    );
  }
}




export default ForecastContainer;
