import axios from 'axios';
import { INVOICE_URL } from '../constanst/Api_Urls';

export const getInvoices = () => axios.get(INVOICE_URL);

export const getSingleInvoice = id => axios.get(INVOICE_URL+id);

export const addInvoice = data => axios.post(INVOICE_URL, data);

export const updateInvoice = (id,data) => axios.put(INVOICE_URL+id, data);

const deleteSingleInovice = id => axios.delete(INVOICE_URL+id); 

export const deleteInovices = async(data) => { 
    try{
        for(let el of data) {
            await deleteSingleInovice(el.id);
        }
    }
    catch{
        return;
    }
}


