import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ResponseAlternatives from '../Alternative/ResponseAlternatives';
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/form/'
const endpointQuestion = 'http://localhost:8000/api/questions/'

const ShowForm = props => {
const [name, setName] = useState('');  
const [questions, setQuestions] = useState([]);
  const {id} = useParams();
  useEffect( () => {
    getFormById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
    const getFormById = async () => {
        const response = await axios.get(`${endpoint}${id}`)
        setName(response.data.name);
        getAllQuestions();
    }
    const getAllQuestions = async () => {
        const response = await axios.get(`${endpointQuestion}${id}`)
        setQuestions(response.data)
    }
  return (
    <div className="d-flex align-items-top bg-white m-5">
        <div className='container'>
            <div className='row'>
                <div className='col text-dark'>
                    <h1> {name}</h1>
                </div>
            </div>
            <div className='row text-dark'>
                <p>Bienvenido a la encuesta para {name} es un gusto en saludarte desde nuestra aplicación CMForms, donde puedes crear y 
                responder encuestas rapidamente a continuación te presentamos las preguntas que pueden ser de multiple respuesta o con 
                unica respuesta, tambien tendrás un reto extra con las preguntas de texto libre</p>
            </div>
            <div className='row'>
                <div className='col text-dark'>
                    { questions.map((question)=>(
                        <ResponseAlternatives question={question}></ResponseAlternatives>
                    ))}
                </div>
            </div>
            <div className='row'>
                <div className=' d-grid gap 2'>
                    <Link to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Send</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

ShowForm.propTypes = {}

export default ShowForm