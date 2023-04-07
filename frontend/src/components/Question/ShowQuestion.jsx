import React,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShowAlternatives from '../Alternative/ShowAlternatives'

const endpoint = 'http://localhost:8000/api'

const ShowQuestion = props => {
  const [questions, setQuestions] = useState([]);
  const [alternatives, setAlternatives] = useState([]);

  useEffect(() => {
    getAllQuestions();
  },[])

  const getAllQuestions = async() => {
    const response = await axios.get(`${endpoint}/questions/${props.form_id}`);
    setQuestions(response.data)
    console.log(response.data)
  }

  const deleteQuestion = async (id) => {
    await axios.delete(`${endpoint}/question/${id}`);
    getAllQuestions()
  }

  return (
    <div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Creation Date</th>
                    <th>actions</th>
                    <th>alternatives</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                { questions.map((question)=>(
                  <tr key={question.id}>
                    <td className=''>{question.statement}</td>
                    <td className=''>{question.type}</td>
                    <td>
                        <button onClick={()=>deleteQuestion(question.id)} className='btn btn-danger'>Delete</button>
                    </td>
                    <td>
                        <ShowAlternatives question_id={question.id}></ShowAlternatives>
                    </td>
                  </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

ShowQuestion.propTypes = {}

export default ShowQuestion