import axios from 'axios';
import { SELLERS_URL } from '../constanst/Api_Urls';

export const getIndividualSeller = async(id) => await axios.get(SELLERS_URL+`/${id}`);

export const getAllSellers = () => axios.get(SELLERS_URL);

export const addSeller = data => axios.post(SELLERS_URL, data);

export const updateSeller = (id,data) => axios.put(SELLERS_URL+id, data);

const deleteSingleSeller= id => axios.delete(SELLERS_URL+id); 

export const deleteSellers = async(data) => { 
    for(let el of data) {
        await deleteSingleSeller(el.id);
    }
}