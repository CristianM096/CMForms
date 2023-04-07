import React,{useEffect,useState}from 'react'
import axios from 'axios'
import ShowQuestion from './ShowQuestion'

const endpoint = 'http://localhost:8000/api'
const endpointQuestion = 'http://localhost:8000/api/question/'
const ListQuestions = props => {
  const questions = props.questions;
  
  const getAllQuestions = async() => {
    props.getAllQuestions();
  }

  const deleteQuestion = async (id) => {
    await axios.delete(`${endpoint}/question/${id}`);
    getAllQuestions()
  }
  const createQuestion = async (e) => {
    e.preventDefault()
    const response = await axios.post(endpointQuestion,{statement: "Agrega tu pregunta", type: 'TextFree', form_id: props.form_id})
    getAllQuestions();
  }
  

  return (
    <div>
    
        { questions.map((question)=>(
          <div className='bg-light rounded-2 m-1 p-3 border border-dark'>
            <ShowQuestion question={question} getAllQuestions={getAllQuestions}></ShowQuestion>
          </div>
        )) }
        <form onSubmit={createQuestion}>
            <div className='mb-3 flex'>
                <button type='submit' className='btn btn-success'>Create new Question</button>
            </div>
        </form>

    </div>
  )
}

ListQuestions.propTypes = {}

export default ListQuestions