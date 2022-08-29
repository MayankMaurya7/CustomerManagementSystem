import React from 'react'
import { useSelector } from 'react-redux';
import EditAndDisplayDetails from './EditAndDisplayDetails'
import TableViewComponent from './TableViewComponent'
// import "./styles/"

function CmsDashboard() {
    const customerData = useSelector((state) => state.customerData);


  return (
    <div className='main-container'>
    <h2>Today's Purchase</h2>
    <div className='display-components-container'>
    <TableViewComponent data ={customerData}/>
    <EditAndDisplayDetails/>
    </div>
    </div>
  )
}

export default CmsDashboard