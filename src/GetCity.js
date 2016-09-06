import React from 'react';
var PropTypes = React.PropTypes;

function Button(props) {
  return (
    <button type='button' className='formBtn' onClick={props.onSubmitCity}>
      {props.children}
    </button>
  )
}
function InputField(props) {
  return (<input className='form-control' onChange={props.onUpdateCity} placeholder='Enter City and State' type='text' value={props.city}/>)
}
function GetCity(props) {
  return (
    <div>
      <InputField onUpdateCity={props.onUpdateCity} city={props.city}/>
      <Button onSubmitCity={props.onSubmitCity}>
        Click here for the damn weather
      </Button>
    </div>
  )
}
GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default GetCity
