import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerDetails } from '../redux/customer-details/customerDetailsAction';

function EditAndDisplayDetails() {
    const selectedCustomerData = useSelector((state) => state.selectedCustomer);

    console.log("selectedCustomerData",selectedCustomerData);
    const dispatch = useDispatch();
    const [thiscustomerData, setThiscustomerData] = useState();

    useEffect(()=>{
        setThiscustomerData(selectedCustomerData)
    },[selectedCustomerData])

    console.log("thiscustomerData",thiscustomerData);
  
    const handleInput = (e) => {

        if (e.target.id === "firstname") {
            setThiscustomerData({ ...thiscustomerData, firstname: e.target.value });
          } else if (e.target.id === "lastname") {
            setThiscustomerData({ ...thiscustomerData, lastname: e.target.value });
          }
           else if (e.target.id === "itemCount") {
            setThiscustomerData({ ...thiscustomerData, itemCount: e.target.value });
          }
           else if (e.target.id === "amount") {
            setThiscustomerData({ ...thiscustomerData, amount: e.target.value });
          }
      }
    
    const handleSubmit = () => {
        dispatch(updateCustomerDetails(thiscustomerData));
    };
    return (
      <div className="container">
        <form className="form-box">
            <input
              id="firstname"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={thiscustomerData?.firstName}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="lastname"
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={thiscustomerData?.lastName}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="itemCount"
              type="number"
              className="form-control"
              placeholder="No. of Item Purchased"
              value={thiscustomerData?.itemCount}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="amount"
              type="number"
              className="form-control"
              placeholder="Amount"
              value={thiscustomerData?.amount}
              onChange={(e) => handleInput(e)}
            />
          
          <button onClick={()=>handleSubmit()} type="button" className="login-button">
            Update
          </button>
        </form>
      </div>
    );
}

export default EditAndDisplayDetails