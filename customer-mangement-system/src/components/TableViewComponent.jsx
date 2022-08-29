import React from 'react'
import { Table, Button} from 'semantic-ui-react';
import { CUSTOMER_TABLE_HEADER } from './constants';
import { useDispatch } from "react-redux";
import { selectedCustomer } from '../redux/customer-details/customerDetailsAction';


const getValue =(fieldName, item, index)=>{
    // console.log(fieldName, item, index );
    const itemData = item[fieldName];
    // console.log(itemData);
      switch (fieldName){
        case "Sr.no" : return index+1;
        case "Name" : return item["firstName"] +" "+ item["lastName"]
        default : return itemData;
      }
  }

function TableViewComponent({data}) {

    const dispatch = useDispatch();

    const handleEditClicked = (selectedCustomerData) => {
        console.log("editClicked",selectedCustomerData);
        dispatch(selectedCustomer(selectedCustomerData));
    };

  return (
    <div>
          <Table  celled style={{ margin: '1rem 0rem' }} striped compact textAlign="center">
            <Table.Header>
              <Table.Row style={{ margin: '1rem 0rem' }} striped compact textAlign="center">
              {CUSTOMER_TABLE_HEADER.map(({header:headerName , key }) =><Table.HeaderCell key={key}>{headerName}</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map((item , index) => 
              <Table.Row>
                {CUSTOMER_TABLE_HEADER.map(({value :fieldName , key }) =><Table.Cell key={key}>{getValue(fieldName, item, index)}</Table.Cell>
              )}
                <Table.Cell className="table-action">
                            <Button content="Edit" className='edit-button' onClick={()=> handleEditClicked(item)}/>
                            <Button content="Delete" className='delete-button'/>
                    </Table.Cell>
              </Table.Row>
              )}    
            </Table.Body>
          </Table>
        </div>
  )
}

export default TableViewComponent