import React, { useEffect, useState } from 'react'
import './input/Input.css'
import TableRender from './table/Table'
import Input from './input/Input'
import { produce } from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import {  button, themValues, updateInput } from '../redux/storeInput';
import { KiemTraLoi } from './ultis/validate'

function Layout() {
  const [values,setValues]=useState({ maSV: '', hoTen: '', sdt: '', email: '' });
  const [touches, setTouches] = useState({
    maSV: false,
    hoTen: false,
    sdt: false,
    email: false,

  });

  const [errors, setErrors] = useState({
    maSV: '', hoTen: '', sdt: '', email: '' 
  });
  const valuesTable=useSelector((rootReducer)=>{
    return rootReducer.inputStore
  })
  
  console.log(valuesTable);
  const dispatch=useDispatch();


  const handleChange=(e)=>{
    const nameInput=e.target.name;
    const valueInput=e.target.value;
    const newValues=produce(values,daft=>{
      daft[nameInput]=valueInput;
    })
    setValues(newValues);
  }

  const handleSubmit=(e)=>{
    e.preventDefault(); 
    const allTouches = Object.entries(touches).every(([field, value]) => value);
  const isValue = Object.entries(errors).every(([field, value]) => value === '');

  if (!allTouches || !isValue) {
    return; 
  }
    if(!valuesTable.button){
      dispatch(updateInput(values))
      dispatch(button(true))
      

    }else{
      dispatch(themValues(values))
      
  }
 
   
  setValues({ maSV: '', hoTen: '', sdt: '', email: '' });
 
  }
  const handleBlur=(e)=>{
    const n=e.target.name // lấy giá trị từ name
    const newTouches=produce(touches,(daft)=>{
      daft[n]=true;
      

    })
   
    setTouches(newTouches);
    handleValidate(n)
  }
  const getFieldProps=(name)=>{
    return {
      name:name,
      value:values[name],
      onChange:handleChange,
      error:touches[name]&&errors[name],
      onBlur:handleBlur,
    }
  }
  const handleValidate = (field) => {
    let errs = {};
    const value = values[field];

    switch (field) {
      case 'maSV':
        errs[field] = new KiemTraLoi(value)
          .boTrong() 
          
          .layLoiRa();
        break;
      case 'hoTen':
        errs[field] = new KiemTraLoi(value)
          .boTrong() 
          .string() 
          .min(2) 
          .layLoiRa(); 
        break;
      case 'sdt':
        errs[field] = new KiemTraLoi(value)
        .boTrong()
          .layLoiRa(); 
        break;
      case 'email':
        errs[field] = new KiemTraLoi(value)
          .boTrong() 
          .email() 
          .layLoiRa(); 
        break;
    }

    setErrors((p) => ({ ...p, ...errs })); 
  };

useEffect(()=>{
  setValues({
    maSV:valuesTable.taskEdit.maSV,
    hoTen:valuesTable.taskEdit.hoTen,
    sdt:valuesTable.taskEdit.sdt,
    email:valuesTable.taskEdit.email,
  })
},[valuesTable.taskEdit.email, valuesTable.taskEdit.hoTen, valuesTable.taskEdit.maSV, valuesTable.taskEdit.sdt])
  return (
    <div className='container w-50'>
     <h3>Form</h3>
      <form action="" className='w-100' onSubmit={handleSubmit}>
        <div className="group-two d-flex gap-2">
      <Input type='number' title='Mã SV' name="maSV" value={values.maSV}  {...getFieldProps('maSV')} />

        <Input type='text' title='Họ Tên' name="hoTen" value={values.hoTen} 
{...getFieldProps('hoTen')}
        />
  
     

     
        </div>
        <div className="d-flex gap-2">
           <div className='w-50 text-danger'>{errors.maSV}</div> 
           <div className='w-50 text-danger'>{errors.hoTen}</div> 
        </div>
      
        <div className="group-two d-flex gap-2 mt-3">
        <Input type='number' title='Số Điện Thoại' name="sdt" value={values.sdt} {...getFieldProps('sdt')}/>
        
        <Input type='email' title='Email' name="email" value={values.email} {...getFieldProps('email')}/>
   
        


     
        </div>
        <div className="d-flex gap-2">
           <div className='w-50 text-danger'>{errors.sdt}</div> 
           <div className='w-50 text-danger'>{errors.email}</div> 
        </div>
       <div>
     {valuesTable.button ? <button type='submit' className='btn btn-success mt-3'>Thêm Sinh Viên</button>: <button type='submit' className='btn btn-success mt-3'>Chỉnh sủa</button>}   
       </div>
     

      </form>

       <h3>Thông Tin Sinh Viên</h3>
      <TableRender/>
    </div>
  )
}

export default Layout
