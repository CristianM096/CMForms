import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MultipleAlternative = props => {
    const alternative = props.alternative;
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (isChecked) => {
        setIsChecked(!isChecked);
    }
  return (
    <div>
        
        {alternative.value}
        <input className="form-check-input m-2" type="checkbox" checked={isChecked} onChange={()=>handleCheckboxChange(isChecked)}></input>
    </div>
  )
}

MultipleAlternative.propTypes = {}

export default MultipleAlternative