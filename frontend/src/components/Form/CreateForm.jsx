import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api/form'


const CreateForm = () => {
  const [name, setName] = useState('');  
  const navigate = useNavigate()
  const store = async (e) => {
    e.preventDefault()
    const response = await axios.post(endpoint,{name: name})
    console.log(response.data)
    navigate('/')
  }

  return (
    <div>
        <h3> Create Form</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input value={name} 
                    onChange={ (e) => setName(e.target.value)} 
                    type='text' 
                    className='form-control'
                />
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default CreateForm