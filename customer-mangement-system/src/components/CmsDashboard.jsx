import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import EditAndDisplayDetails from './EditAndDisplayDetails'
import TableViewComponent from './TableViewComponent'
import "./styles/dashboardstyle.scss"
import { Button } from 'semantic-ui-react';

function CmsDashboard() {
    const customerData = useSelector((state) => state.customerData);
    console.log("data",customerData);
    const [addCustomerFlag, setAddCustomerFlag] = useState(true);


    const switchToAddDetailsMode = () =>{
        setAddCustomerFlag(true)
    }

    const removeAddDetailsMode =()=>{
        setAddCustomerFlag(false)
    }

  return (
    <div className='main-container'>
    <h2>Today's Purchase</h2>
    <Button className='add-button' onClick={()=>switchToAddDetailsMode()}>Add New Customer</Button>
    <div className='display-components-container'>
    <TableViewComponent data ={customerData} removeAddDetailsMode={removeAddDetailsMode} className="tableview"/>
    <EditAndDisplayDetails className="editdetails" addCustomerFlag={addCustomerFlag} removeAddDetailsMode={removeAddDetailsMode}/>
    </div>
    </div>
  )
}

export default CmsDashboard