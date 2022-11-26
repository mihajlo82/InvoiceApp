import {useState, useEffect} from 'react';
import useFetch from '../../../../context/useFetch';
import { invoiceSchema } from '../../../../data/objectSchema';

const useSingleInvoice = (item, findItem) => {
  const [sellerName, setSellerName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const {allSellers, allCustomers} = useFetch(); 

  useEffect(()=> {
    setupNames();
    
    return () => setupNames();
    
  }, [item,allSellers])

  const setupNames = async() => {
    const resName = await findItem(allSellers, item, 'seller'); 
    const customerName = await findItem(allCustomers, item, 'customer');

    setSellerName(resName?.name);
    setCustomerName(customerName?.name);
  }
  
  return  {sellerName, customerName}
}

export default useSingleInvoice;

useSingleInvoice.defaultProps = {
    item: invoiceSchema,
    findItem: ()=>{}
}