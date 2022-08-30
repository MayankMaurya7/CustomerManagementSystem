import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Label } from 'semantic-ui-react';
import { addCustomer, updateCustomerDetails } from '../redux/customer-details/customerDetailsAction';
import "./styles/formstyle.scss"

function EditAndDisplayDetails({addCustomerFlag,removeAddDetailsMode}) {
    const selectedCustomerData = useSelector((state) => state.selectedCustomer);

    // console.log("selectedCustomerData",selectedCustomerData);
    const dispatch = useDispatch();
    const [thiscustomerData, setThiscustomerData] = useState();
    const [isValueEmpty, setIsValueEmpty] = useState(false);

    useEffect(()=>{
        setThiscustomerData(selectedCustomerData)
    },[selectedCustomerData])
    useEffect(()=>{
        addCustomerFlag && setThiscustomerData({})
    },[addCustomerFlag])
    console.log("thiscustomerData",thiscustomerData);
    useEffect(()=>{
        function validation(){
            const formValues = thiscustomerData?Object.values(thiscustomerData):[]
            let flag = false;
            
                for(const value of formValues){
                    // console.log("value",value);
                    typeof(value)==='string' && value.trim() ==="" ?flag = true :console.log("value",value)
                }
                return flag;
          }
    setIsValueEmpty(validation())
    },[thiscustomerData])
  
    const handleInput = (e) => {
        // e.target.value.trim() === ""? setIsValueEmpty(true):
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
    
    //   const validation = ()=>{
    //     const formValues = Object.values(thiscustomerData);
    //     let flag = false;
        
    //         for(const value of formValues){
    //             console.log("value",value);
    //             typeof(value)==='string' && value.trim() ==="" ?flag = true :console.log("value",value)
    //         }
    //         return flag;
    //   }
    const handleSubmit = () => {
        const editSubmit =()=>{
            if(isValueEmpty){
                alert("Please fill all the fields");
            }else{
                dispatch(updateCustomerDetails(thiscustomerData))
                
            }
        }
        addCustomerFlag? dispatch(addCustomer(thiscustomerData)): editSubmit()
    };

    const renderHeading = ()=> addCustomerFlag? "Enter Details" : "Edit Details"
    const renderSubmitButton = ()=> addCustomerFlag? "Add New Customer" : "Update"

    return (
        
      <div className="form-container">
        {console.log("thiscustomerData1",thiscustomerData)}
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