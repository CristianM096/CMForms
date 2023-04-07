import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ShowQuestion from '../Question/ShowQuestion'

const endpoint = 'http://localhost:8000/api/form/'


const EditForm = () => {
  const [name, setName] = useState('');  
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`,{
        name: name,
    })
    navigate('/')
  }
  useEffect( () => {
    const getFormById = async () => {
        const response = await axios.get(`${endpoint}${id}`)
        setName(response.data.name)
    }
    getFormById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <h3> Edit Form</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input value={name} 
                    onChange={ (e) => setName(e.target.value)} 
                    type='text' 
                    className='form-control'
                />
                <ShowQuestion form_id={id}></ShowQuestion>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default EditForm