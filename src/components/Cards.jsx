import React, { useState } from 'react'
import { jobsData } from '../data/jobsData'
function Cards(props) {
 
  return (
    <div className='container'>          
            <article>
                        {console.log(props,'+++jasjdasj')}
                        <div>
                        <h3>{props.role} </h3>
                        <p>{props.description}</p>
                        <span style={{color: 'grey'}}>{props.experience} | {props.location}</span>
                        <div className='skills'>
                            {
                                props.skills.map((skill,i)=>(
                                    <span>{skill}</span>
                                ))
                            }
                        </div>
                        </div>
                        <button>Apply</button>
                    </article>
    </div>
  )
}

export default Cards