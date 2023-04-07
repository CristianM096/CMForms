import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ListQuestions from '../Question/ListQuestions'

const endpoint = 'http://localhost:8000/api/form/'
const endpointQuestion = 'http://localhost:8000/api/questions/'


const EditForm = () => {
  const [name, setName] = useState('');  
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`,{
        name: name,
    })
    navigate(`/show/${id}`)
  }
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
    <div className="d-flex justify-content-between">
        <div className='container'>
            <div className='row'>
              <h3> Form</h3>
              <p> Aqui podras agregar nuevas preguntas, así como seleccionar entre los diferentes tipos de pregunta
                  que tenemos para ti, a demás si eliges entre preguntas Single o Multiple, podras agregar alternativas
                  para que tu encuestado pueda seleccionar ya sea una respuesta (Single) o más de una (Multiple)</p>
            </div>
            <form onSubmit={update} >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                    </div>
                    <input value={name} 
                        onChange={ (e) => setName(e.target.value)} 
                        type='text'
                        className='form-control'
                        aria-describedby="basic-addon1"
                        required
                    />
                    <button type='submit' className='btn btn-primary'>Save</button>  
                </div>              
            </form>
            <h3> Questions</h3>
            <div className='row'>
                <ListQuestions form_id={id} questions={questions} getAllQuestions={getAllQuestions}></ListQuestions>
            </div>
        </div>
    </div>
  )
}

export default EditForm