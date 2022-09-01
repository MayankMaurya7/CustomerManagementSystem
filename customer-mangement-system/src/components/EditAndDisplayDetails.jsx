import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Label } from 'semantic-ui-react';
import { addCustomer, updateCustomerDetails } from '../redux/customer-details/customerDetailsAction';
import "./styles/formstyle.scss"

const initData = {   
    firstName: "",
    lastName: "",
    itemCount: "",
    amount: "",
}
function EditAndDisplayDetails({addCustomerFlag}) {
    const selectedCustomerData = useSelector((state) => state.selectedCustomer);

    const dispatch = useDispatch();
    const [thiscustomerData, setThiscustomerData] = useState(initData);

    useEffect(()=>{
        setThiscustomerData(selectedCustomerData)
    },[selectedCustomerData])
    useEffect(()=>{
        addCustomerFlag && setThiscustomerData(initData)
    },[addCustomerFlag])
  
    const handleInput = (e) => {
        if (e.target.id === "firstName") {
            setThiscustomerData({ ...thiscustomerData, firstName: e.target.value });
          } else if (e.target.id === "lastName") {
            setThiscustomerData({ ...thiscustomerData, lastName: e.target.value });
          }
           else if (e.target.id === "itemCount") {
            setThiscustomerData({ ...thiscustomerData, itemCount: e.target.value });
          }
           else if (e.target.id === "amount") {
            setThiscustomerData({ ...thiscustomerData, amount: e.target.value });
          }
      }
    
    const handleSubmit = () => {

        const isvalid = Object.entries(thiscustomerData).every((item)=>{
            const[key,value] = item;
            return Boolean(value)
        })
            if(!isvalid){
                alert("Please fill all the fields");

            }else{
                addCustomerFlag && setThiscustomerData({...thiscustomerData,id: Math.random()});
                addCustomerFlag? dispatch(addCustomer(thiscustomerData)):dispatch(updateCustomerDetails(thiscustomerData))
            }
    };

    const renderHeading = ()=> addCustomerFlag? "Enter Details" : "Edit Details"
    const renderSubmitButton = ()=> addCustomerFlag? "Add New Customer" : "Update"
    

    return (
        
      <div className="form-container">
        <h3>{renderHeading()}</h3>
        <Form className="form-box" size={"small"} key={"small"}>
                <Form.Field
                    id='firstName'
                    control={Input}
                    label='First Name'
                    placeholder='First Name'
                    value={thiscustomerData?.firstName}
                    onChange={(e) => handleInput(e)}
                    />
                <Form.Field
                        id='lastName'
                        control={Input}
                        label='Last Name'
                        placeholder='Last Name'
                        value={thiscustomerData?.lastName}
                        onChange={(e) => handleInput(e)}
                        />
                <Form.Field
                        id='itemCount'
                        control={Input}
                        type="number"
                        label='No. of Item Purchased'
                        placeholder='#Item Purchased'
                        value={thiscustomerData?.itemCount}
                        onChange={(e) => handleInput(e)}
                        />
                <Form.Field
                        id='amount'
                        control={Input}
                        type="number"
                        label='Amount'
                        placeholder='Amount'
                        value={thiscustomerData?.amount}
                        onChange={(e) => handleInput(e)}
                        />
          <Button onClick={()=>handleSubmit()} type="button"  className="Update-button" >
            {renderSubmitButton()}
          </Button>
        </Form>
      </div>
    );
}

export default EditAndDisplayDetails