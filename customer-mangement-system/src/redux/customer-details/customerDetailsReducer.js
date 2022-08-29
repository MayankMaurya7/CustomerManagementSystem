import { data } from "../../data";
import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, SELECTED_CUSTOMER } from "./customerDetailsTypes";

const initialState = {
  customerData: data,
  selectedCustomer:{}
};

const customerDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {
        // payload Sample =  {
      //       id: 1596199359844,
      //       name: "txt",
      //       amount: "1",
      //     }
      const updatedcustomerData = [
        ...state.customerData,
        action.payload,
      ];

      return { ...state, customerData: updatedcustomerData };
    }
    case EDIT_CUSTOMER: {


        const unEditedCustomerData = state.customerData.filter(
        (customerData) => customerData.id !== action.payload.id
      );
        const updatedcustomerData = [
          ...unEditedCustomerData,
          action.payload,
        ];
        console.log("updatedcustomerData",updatedcustomerData)
  
        return { ...state, customerData: updatedcustomerData ,selectedCustomer: action.payload };
      }
    case SELECTED_CUSTOMER: {

        return { ...state ,selectedCustomer: action.payload };
      }
    case DELETE_CUSTOMER: {
      //  payload sample ="1596199359844"
      const updatedcustomerData = state.customerData.filter(
        (customerData) => customerData.id !== action.payload
      );
      return {
        ...state,
        customerData: updatedcustomerData,
      };
    }
    default:
      return state;
  }
};
// console.log(customerData);

export default customerDetailsReducer;
