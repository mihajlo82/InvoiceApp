import { useEffect, useState} from 'react'
import { getInvoices } from '../../api_service/invoice_service';
import { getAllSellers } from '../../api_service/seller_service';
import { getAllCustomers } from '../../api_service/customer_service';
import useFormAdd from '../modal/create/customAdd/useFormAdd'
import { INVOICES, SELLERS, CUSTOMERS } from '../../constanst/types';
import { customerSchema, invoiceSchema, sellerSchema } from '../../data/objectSchema';

const useInvoice = ({data, setData, tittle, setActiveMenuTab, setSelectedItems, setIsLoading, setCounterIndex}) => {
  const [dataObjectSchema, setDataObjectSchema] = useState({});
  const {showErrorFetch} = useFormAdd();

  const resetItems = () => {
    setSelectedItems([]);
    setIsLoading(false);
  }

  const startCallGeneric = (num, callFunction) => {
    setActiveMenuTab(num);
    callFunction();
    adoptSchemaToObject(num);
    setCounterIndex(0)    
  }

  const adoptSchemaToObject = num => {
      num === 0 && setDataObjectSchema(invoiceSchema);
      num === 1 && setDataObjectSchema(sellerSchema);
      num === 2 && setDataObjectSchema(customerSchema);
  }

  const genericFunctionCall = calledFunction => {
      setIsLoading(true);
      
      calledFunction()
        .then(res=> setData(res.data))
        .catch(err=> showErrorFetch(err.message, 2000))
        .finally(()=> resetItems());
  };

  const callInvoice = () => genericFunctionCall(getInvoices);

  const callCustomers = () => genericFunctionCall(getAllCustomers);

  const callSellers = () =>  genericFunctionCall(getAllSellers);
  
  const callStart = () => {
     if(tittle===INVOICES) startCallGeneric(0, callInvoice);
     else if(tittle===SELLERS) startCallGeneric(1, callSellers); 
     else if(tittle === CUSTOMERS) startCallGeneric(2, callCustomers);  
  }
      
  useEffect(() => callStart(), []);  
 
  return {data, setData, dataObjectSchema, setDataObjectSchema};
}

export default useInvoice;

useInvoice.defaultProps= {
  tittle: INVOICES,
  setActiveMenuTab: ()=>{},
  setData: ()=>{}, 
  setSelectedItems:()=>{}, 
  setCounterIndex: ()=>{},
  setIsLoading: ()=>{}
}