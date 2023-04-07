import React,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const endpoint = 'http://localhost:8000/api/alternative'


const ShowAlternatives = props => {
    const alternative = props.alternative;
    const [value, setValue] = useState(alternative.value);
    const [isCorrect, setIsCorrect] = useState(alternative.isCorrect);
    
    // const deleteQuestion = async (id) => {
    //   await axios.delete(`${endpoint}/question/${id}`);
    //   getAllQuestions()
    // }
    function handleCheckboxChange() {
        setIsCorrect(!isCorrect);
    }
    const update = async (e) => {
        e.preventDefault()
        const response = await axios.put(`${endpoint}/${alternative.id}`,{value: value,isCorrect:isCorrect, question_id: alternative.question_id})
        props.getAllAlternatitives();
      }
      const deleteAlternative = async (id) => {
        await axios.delete(`${endpoint}/${id}`);
        props.getAllAlternatitives();
      }
  return (
    <div>
        <form onSubmit={update}>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Value: </span>
                <input value={value} 
                    onChange={ (e) => setValue(e.target.value)} 
                    type='text' 
                    className='form-control'
                    required
                />
                <div className="px-3">
                    <span className="text-sm-left px-3 text-dark">
                    Is Correct
                    </span>
                    <input className="form-check-input " type="checkbox" checked={isCorrect} onChange={handleCheckboxChange}></input>
                </div>
                <button type='submit' className='btn btn-primary'>Update Alternative</button>
                <button onClick={()=>deleteAlternative(alternative.id)} className='btn btn-danger'>Delete Alternative</button>
            </div>
        </form>
    </div>
  )
}

ShowAlternatives.propTypes = {}

export default ShowAlternatives