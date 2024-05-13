import React from 'react'

function Input(props) {
  const {title,errors,...inputProps}=props
  return (
    <div className="group-from w-50">
    <label htmlFor="" className='d-block'>{title}</label>
     <input
     {...inputProps}
     className='w-100 form-control'/>
  </div>
  )
}

export default Input
