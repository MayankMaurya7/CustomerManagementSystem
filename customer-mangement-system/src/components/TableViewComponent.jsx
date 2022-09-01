import React from 'react'
import { Table, Button} from 'semantic-ui-react';
import { CUSTOMER_TABLE_HEADER } from './constants';
import { useDispatch } from "react-redux";
import { removeCustomer, selectedCustomer } from '../redux/customer-details/customerDetailsAction';
import "./styles/tableviewstyle.scss"




function TableViewComponent({data ,removeAddDetailsMode}) {

    const dispatch = useDispatch();

    const handleEditClicked = (selectedCustomerData) => {
        console.log("editClicked",selectedCustomerData);
        dispatch(selectedCustomer(selectedCustomerData));
        removeAddDetailsMode()
    };
    const handleDeleteClicked = (selectedCustomerData) => {
        // eslint-disable-next-line no-restricted-globals
        confirm("Delete this entry?") ? dispatch(removeCustomer(selectedCustomerData)):console.log("");
        
    };

    const getValue =(fieldName, item, index)=>{
        // console.log(fieldName, item, index );
        console.log("fieldName",fieldName);
        console.log("item",item);
        const itemData = item[fieldName];
        console.log(itemData);
          switch (fieldName){
            case "Sr.no" : return index+1;
            case "Name" : return item["firstName"] +" "+ item["lastName"]
            case "Actions" : return (
                        <Table.Cell className="table-action">
                                <Button content="Edit" className='edit-button' onClick={()=> handleEditClicked(item)}/>
                                <Button content="Delete" className='delete-button' onClick={()=> handleDeleteClicked(item)}/>
                        </Table.Cell>
            )
            default : return itemData;
          }
      }

  return (
    <div className='tableview-container'>
          <Table  style={{ margin: '0px'}}>
            <Table.Header>
              <Table.Row >
              {CUSTOMER_TABLE_HEADER.map(({header:headerName , key }) =><Table.HeaderCell key={key} >{headerName}</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.map((item , index) => 
              <Table.Row>
                {CUSTOMER_TABLE_HEADER.map(({value :fieldName , key }) =><Table.Cell key={key}>{getValue(fieldName, item, index)}</Table.Cell>
              )}
              </Table.Row>
              )}    
            </Table.Body>
          </Table>
        </div>
  )
}

export default TableViewComponent