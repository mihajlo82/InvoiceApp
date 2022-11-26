import { INVOICES, SELLERS, CUSTOMERS } from "../../../constanst/types";
import { TablerBodyRowStyle, RowSpacing } from "../../../styled/invoice/TableStyle";
import SingleInvoiceTable from "./tablesingle/SingleInvoiceTable";
import SingleSellerTable from "./tablesingle/SingleSellerTable";
import SingleCustomerTable from "./tablesingle/SingleCustomerTable";
import React from "react";

const TablerSingle = ({item, onClick, tittle, isChecked, findItem}) => { 
  return (
    <>
    <TablerBodyRowStyle choose={isChecked} onClick={()=>onClick(item)}>
        {tittle === INVOICES && <SingleInvoiceTable item={item} findItem={findItem}/>} 

        {tittle === SELLERS && <SingleSellerTable item={item} />}

        {tittle === CUSTOMERS && <SingleCustomerTable item={item} />}
    </TablerBodyRowStyle>
    
    <RowSpacing />
    </>
  )
}

export default React.memo(TablerSingle);

TablerSingle.defaultProps = {
  item: {}, 
  onClick: ()=> {}, 
  tittle: INVOICES,
  isChecked: false
}