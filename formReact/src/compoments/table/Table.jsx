import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { button, editInput, xoaValues } from '../../redux/storeInput';

function TableRender() {
  const valuesTable=useSelector((rootReducer)=>{
    return rootReducer.inputStore
  })
  const dispatch=useDispatch();

  const renderValuesTable=valuesTable.taskList.map((item,index)=>{
    return (
      <tr key={index}>
      <th scope="row">{item.maSV}</th>
      <td>{item.hoTen}</td>
      <td>{item.sdt}</td>
      <td>{item.email}</td>
      <td>
        <button className='btn btn-success mx-1'
      onClick={()=>{dispatch(xoaValues(item.maSV))}}
      >Xoá</button>
        <button className='btn btn-success'
      onClick={
        ()=>{
          dispatch(editInput(item));
          dispatch(button(false))
        }
        }
      
      >Chỉnh Sửa</button>
      </td>
    </tr>
    )
  })
  return (
    <table className="table">
    <thead className="bg-dark w-100">
      <tr>
        <th scope="col" className=' text-white'>Mã SV</th>
        <th scope="col"  className=' text-white'>Họ Tên</th>
        <th scope="col" className=' text-white'>Số Điện Thoại</th>
        <th scope="col" className=' text-white'>Email</th>
        <th scope="col" className=' text-white'></th>
      </tr>
    </thead>
    <tbody>
      {renderValuesTable}
    </tbody>
  </table>
  )
}

export default TableRender
