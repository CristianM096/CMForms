import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import MultipleAlternative from './MultipleAlternative';
import SingleAlternative from './SingleAlternative';

const endpointAlnternative = 'http://localhost:8000/api/alternative'
const ResponseAlternatives = props => {
    const question = props.question;
    const [alternatives, setAlternatives] = useState([]);

    useEffect( () => {
        getAllAlternatitives()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const getAllAlternatitives = async () => {
        const response = await axios.get(`${endpointAlnternative}s/${question.id}`)
        setAlternatives(response.data)
    }
  return (
    <div className='bg-light m-2'>
        <h4>Enunciado: {question.statement}.</h4>
        <p className='fs-5'>tipo de pregunta: {question.type}</p>
        {}
        
        {question.type === "Multiple" ? (
                        <div>
                            {alternatives.map((alternative) =>
                                <div>
                                    <MultipleAlternative alternative = {alternative}></MultipleAlternative>
                                </div>
                                
                            )}
                        </div>
                    ) : (
                        
                        <div>{question.type === "Single" ? (
                            <div>
                                <SingleAlternative alternatives = {alternatives}></SingleAlternative>
                            </div>
                        ):(
                            <div>
                                <input className='form-control'></input>
                            </div>)}
                        </div>
                    )}
    </div>
  )
}

ResponseAlternatives.propTypes = {}

export default ResponseAlternatives