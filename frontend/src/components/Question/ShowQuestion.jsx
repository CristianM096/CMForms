import React,{useEffect,useState}from 'react'
import axios from 'axios'
import ShowAlternatives from '../Alternative/ShowAlternatives'

const endpoint = 'http://localhost:8000/api/question/'
const endpointAlnternative = 'http://localhost:8000/api/alternative'

const ShowQuestion = props => {
    const question = props.question
    const [statement, setStatement] = useState(question.statement);
    const [type, setType] = useState(question.type);
    const [alternatives, setAlternatives] = useState(question.alternatives);
    
    const handleSelectChange = (type) => {
        setType(type);
      };
      const createAlternative = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${endpointAlnternative}/`,{value: "Escribe un valor", isCorrect: false, question_id: question.id})
        getAllAlternatitives();
      }
      const getAllQuestions = async() => {
        props.getAllQuestions();
      }
      const update = async (e) => {
        e.preventDefault()
        const response = await axios.put(`${endpoint}${question.id}`,{statement: statement,type:type, form_id: question.form_id})
        getAllQuestions();
      }
      const getAllAlternatitives = async () => {
        const response = await axios.get(`${endpointAlnternative}s/${question.id}`)
        setAlternatives(response.data)
    }
    const deleteQuestion = async (id) => {
        await axios.delete(`${endpoint}${id}`);
        getAllQuestions();
      }
    
  return (
    <div>
            <div className='row flex-row'>
                <form onSubmit={update}>
                    
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Statement: </span>
                        </div>
                        <input value={statement} 
                            onChange={ (e) => setStatement(e.target.value)} 
                            type='text' 
                            className='form-control'
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Type: </span>
                        </div>
                        <select className="form-select" aria-label="Default select example"
                            defaultValue={type}
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            style={{ width: 120 }}
                            >
                            <option value="Multiple">Multiple selection</option>
                            <option value="Single">Single selection</option>
                            <option value="TextFree">Free Text</option>
                        </select>
                        
                        <button type='submit' className='btn btn-primary'>Update Question</button>
                        <button onClick={()=>deleteQuestion(question.id)} className='btn btn-danger'>Delete Question</button>
                    </div>
                </form>
                <div>
                    {type !== "TextFree" ? (
                        <div>
                            {alternatives.map((alternative) =>
                                <div>
                                    <ShowAlternatives alternative = {alternative} getAllAlternatitives={getAllAlternatitives}></ShowAlternatives>
                                </div>
                            )}
                            <form onSubmit={createAlternative}>
                                <div className='mb-3 flex'>
                                    <button type='submit' className='btn btn-success'>Create new Alternative</button>
                                </div>
                            </form>
                        </div>
                    ):(
                        <div></div>
                    )}
            </div>
        </div>
    </div>
  )
}

ShowQuestion.propTypes = {}

export default ShowQuestion