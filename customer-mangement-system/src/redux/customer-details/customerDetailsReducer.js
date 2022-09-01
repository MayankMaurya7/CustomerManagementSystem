import { data } from "../../components/constants";
import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, SELECTED_CUSTOMER } from "./customerDetailsTypes";

const initialState = {
  customerData: data,
  selectedCustomer:{}
};

const customerDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {

      const updatedcustomerData = [
        ...state.customerData,
        action.payload,
      ];

      return { ...state, customerData: updatedcustomerData };
    }
    case EDIT_CUSTOMER: {

        console.log("state.customerData",state.customerData)
        const unEditedCustomerData = state.customerData.filter(
        (customerData) => customerData.id !== action.payload.id
      );
      console.log("unEditedCustomerData",unEditedCustomerData);
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
      const updatedcustomerData = state.customerData.filter(
        (customerData) => customerData.id !== action.payload.id
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

export default customerDetailsReducer;
