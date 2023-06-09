import React,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ListForms = () => {
  const[forms,setForms] = useState([]);
  
  useEffect( () => {
    getAllForms();
  },[]);

  const getAllForms = async () => {
    const response = await axios.get(`${endpoint}/forms`);
    setForms(response.data)
  }

  const deleteForm = async (id) => {
    await axios.delete(`${endpoint}/form/${id}`);
    getAllForms()
  }

  return (
    <div>
        <div className=' d-grid gap 2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Creation Date</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody className='text-white'>
                { forms.map((form)=>(
                  <tr key={form.id}>
                    <td className='text-white'>{form.name}</td>
                    <td className='text-white'>{form.created_at}</td>
                    <td>
                        <Link to={`/show/${form.id}`} className='btn btn-success'>Show</Link>
                        <Link to={`/edit/${form.id}`} className='btn btn-warning'>Edit</Link>
                        <button onClick={()=>deleteForm(form.id)} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )) }
            </tbody>
        </table>

    </div>
  )
}

export default ListForms