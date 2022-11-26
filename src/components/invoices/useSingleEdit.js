import useFormAdd from "../modal/create/customAdd/useFormAdd";
import { getSingleInvoice } from "../../api_service/invoice_service";
import { getIndividualCustomer } from "../../api_service/customer_service";
import { getIndividualSeller } from "../../api_service/seller_service";
import { useState, useEffect } from "react";
import { INVOICES, SELLERS, CUSTOMERS } from "../../constanst/types";

const useSingleEdit = ({tittle, id}) => {
    const [itemObj, setItemObj] = useState({});
    const {showError} = useFormAdd();
     
    const getInvoice = () => getSingleInvoice(id).then(res =>res.status === 200 && setItemObj(res.data)).catch(err => showError('Error getting invoice!', 1500, '/invoices'));

    const getSeller = () => getIndividualSeller(id).then(res => res.status === 200 && setItemObj(res.data)).catch(err => showError('Error getting seller!', 1500, '/sellers'));

    const getCustomer = () => getIndividualCustomer(id).then(res => res.status === 200 && setItemObj(res.data)).catch(err => showError('Error getting customer!', 1500, '/customer'));

    useEffect(() =>{
        if(tittle === INVOICES) getInvoice(id); 
        else if(tittle === SELLERS) getSeller(id);
        else if(tittle === CUSTOMERS) getCustomer(id);
    }, []); 

  return {itemObj, setItemObj}
}

export default useSingleEdit;

useSingleEdit.defaultProps = {
    tittle: INVOICES,
    id: ''
}