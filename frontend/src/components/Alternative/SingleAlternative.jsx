import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SingleAlternative = props => {
    const alternatives = props.alternatives;
    const [selectedValue, setSelectedValue] = useState('');

    const handleOptionChange = (event) => {
        setSelectedValue(event.target.value);
      }
  return (
    <div>
    
        {alternatives.map((alternative) =>
            <div>
                <label>
                    {alternative.value}
                    <input
                    type="radio"
                    name="options"
                    className='form-check-input'
                    value={alternative.value}
                    checked={selectedValue === alternative.value}
                    onChange={handleOptionChange}
                    />
                </label>
            </div>
            
        )}
        
    </div>
  )
}

SingleAlternative.propTypes = {}

export default SingleAlternative