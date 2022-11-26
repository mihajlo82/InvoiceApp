import { useState, useEffect } from "react";
import { getInvoices } from "../api_service/invoice_service";
import { getAllSellers } from "../api_service/seller_service";
import { getAllCustomers } from "../api_service/customer_service";

const useFetch = (data) => {
    const [allInvoices, setAllInvoices] = useState([]);
    const [allSellers, setAllSellers] = useState([]);
    const [allCustomers, setAllCustomers] = useState([]);

  //Get All Sellers
  const fetchSellers = () => {
    getAllSellers().then(res => res.status === 200 && setAllSellers(res.data)).catch(() =>alert('Error getting sellers!'));
  }

  //Get All Customers
  const fetchCustomers = () => {
    getAllCustomers().then(res => res.status === 200 && setAllCustomers(res.data)).catch(() => alert('Error gettings customers!'));
  }

  //Get All Invoices
 const fetchInvoices = () =>{
   getInvoices().then(res => res.status === 200 && setAllInvoices(res.data)).catch(() => alert('Error getting invoices!'));
}

    //initial call data
    const initCall = () => { 
        fetchInvoices();
        fetchSellers();
        fetchCustomers();
    }

   useEffect(()=> initCall(), [data])
    
  return {allInvoices, setAllInvoices, allSellers, allCustomers};
}

export default useFetch