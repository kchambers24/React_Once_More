import React, { Component } from 'react';
var PropTypes = React.PropTypes;
import {convertTemp} from './Utils';
import {getDate} from './Utils'

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div>
      <img  src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <div>
        {props.forecastData.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1> Loading </h1>
          : <ForecastUI city={props.city} forecast={props.forecastData} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}


export default Forecast;
