import React, {Component, PropTypes} from 'react';
import GetCity from './GetCity';
import {getCurrentWeather} from './Api';
import {getForcast} from './Api'

class GetCityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    }
  }
  handleSubmitCity(event) {
    event.preventDefault();
    console.log(this.state.city)
    this.context.router.push('/forecast/' + this.state.city)
    getForcast(this.state.city).then(function(response) {
      console.log(response)
    })
  }
  handleUpdateCity(event) {
    this.setState({city: event.target.value})
  }
  render() {
    return (<GetCity direction={this.props.direction} onSubmitCity={this.handleSubmitCity.bind(this)} onUpdateCity={this.handleUpdateCity.bind(this)} city={this.state.city}/>);
  }
}

GetCityContainer.propTypes = {
  direction: PropTypes.string
}
GetCityContainer.contextTypes = {
  router: PropTypes.object.isRequired
};
GetCityContainer.defaultProps = {
  direction: "column"
};

export default GetCityContainer;
