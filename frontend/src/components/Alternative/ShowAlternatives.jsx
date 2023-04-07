import React,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const endpoint = 'http://localhost:8000/api'


const ShowAlternatives = props => {
    const [alternatives, setAlternatives] = useState([]);

    useEffect(() => {
        getAllAlternatives();
    },[])

    const getAllAlternatives = async() => {
        const response = await axios.get(`${endpoint}/alternatives/${props.question_id}`);
        setAlternatives(response.data)
        console.log(response.data)
    }
  
    // const deleteQuestion = async (id) => {
    //   await axios.delete(`${endpoint}/question/${id}`);
    //   getAllQuestions()
    // }

  return (
    <div>
        {alternatives.map((alternative)=>(
            alternative.value
        ))}
    </div>
  )
}

ShowAlternatives.propTypes = {}

export default ShowAlternatives