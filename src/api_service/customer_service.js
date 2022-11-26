import axios from 'axios';
import { CUSTOMERS_URL } from '../constanst/Api_Urls';


export const getIndividualCustomer = async(id) => await axios.get(CUSTOMERS_URL+`/${id}`);

export const getAllCustomers = () => axios.get(CUSTOMERS_URL);

export const addCustomer = data => axios.post(CUSTOMERS_URL, data);

export const updateCustomer = (id,data) => axios.put(CUSTOMERS_URL+id, data);

const deleteSingleCustomer = id => axios.delete(CUSTOMERS_URL+id); 

export const deleteCustomers = async(data) => { 
        for(let el of data) {
            await deleteSingleCustomer(el.id);
        }
    }



