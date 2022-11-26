import { TablerBodyCell, Text } from "../../../../styled/invoice/TableStyle";
import useFetch from "../../../../context/useFetch";
import { useEffect, useState } from "react";

const SingleInvoiceTable = ({item, findItem}) => {
  const [sellerName, setSellerName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const {allSellers, allCustomers} = useFetch(); 

  useEffect(()=> {
    setupNames();
    
    return () => setupNames();
    
  }, [item, allSellers, allCustomers])

  const setupNames = async() => {
    const resName = await findItem(allSellers, item, 'seller'); 
    const customerName = await findItem(allCustomers, item, 'customer');

    setSellerName(resName?.name);
    setCustomerName(customerName?.name);
  }
  
  return (
    <>
        <TablerBodyCell>
            <Text to={`/sellerdetails/${item?.seller?.id}`}> {sellerName}</Text>
        </TablerBodyCell>
        
        <TablerBodyCell>
            <Text to={`/customerdetails/${item?.customer?.id}`}> {customerName} </Text>
        </TablerBodyCell>

        <TablerBodyCell>{item.date}</TablerBodyCell>
        <TablerBodyCell>{parseInt(item?.amount)}.00$</TablerBodyCell>
    </>
  )
}

export default SingleInvoiceTable