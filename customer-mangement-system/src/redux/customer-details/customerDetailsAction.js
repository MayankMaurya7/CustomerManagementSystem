import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, SELECTED_CUSTOMER } from "./customerDetailsTypes";


export const addCustomer = (customerData) => {
  console.log(customerData);
  return {
    type: ADD_CUSTOMER,
    payload: customerData,
  };
};
export const removeCustomer = (customerData) => {
  console.log(customerData);
  return {
    type: DELETE_CUSTOMER,
    payload: customerData,
  };
};
export const updateCustomerDetails = (customerData) => {
  console.log(customerData);
  return {
    type: EDIT_CUSTOMER,
    payload: customerData,
  };
};
export const selectedCustomer  = (customerData) => {
  console.log(customerData);
  return {
    type: SELECTED_CUSTOMER,
    payload: customerData,
  };
};
