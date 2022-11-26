
import { addInvoice, updateInvoice } from '../../../../api_service/invoice_service';
import useFormAdd from './useFormAdd';
import { addSeller, updateSeller } from '../../../../api_service/seller_service';
import { validateCustomerSendObj } from '../../../../validations/validate_customer';
import { addCustomer, updateCustomer } from '../../../../api_service/customer_service';
import { validateSellerSendObj } from '../../../../validations/validate_seller';
import { validateInvoiceSendObj } from '../../../../validations/validate_invoice';
import { useNavigate } from 'react-router-dom';
import { SELLERS, CUSTOMERS, INVOICES } from '../../../../constanst/types';
import { sellerSchema, invoiceSchema, customerSchema } from '../../../../data/objectSchema';
import { ADD_MODE } from '../../../../constanst/types';

const useFormData = ({mode, tittle, setData, data, setManipulatePopup, obj, setObj, setSelectedItems,setIsLoading}) => {
  
    const {showSucc, showError, showInvalidDataError} = useFormAdd(setManipulatePopup);
    const navigate = useNavigate();

    const discard = () => {
        if(mode === ADD_MODE){
            setManipulatePopup(false);
        }else{
            tittle === SELLERS ? navigate('/sellers') : (tittle === CUSTOMERS) ? navigate('/customers') : navigate('/invoices');
        }
     }

     const resetItemsState = () => {
        setSelectedItems([]);
        setIsLoading(false);
        resetObjectSchema();
     }


    const genericAdd = (addFunction,addObject) => {
        setIsLoading(true);
        addFunction(addObject)
        .then(res => { 
            setData([res.data, ...data]);
            showSucc('Successfully added!', 1000)
            })
        .catch(err => showError(err, 1000))
        .finally(()=> resetItemsState());
     }

    const genericUpdate = (updateFunction, updateObject) => {
        const navTo = tittle=== SELLERS ? '/sellers' : tittle === CUSTOMERS ? '/customers' : '/invoices';
        setIsLoading(true);

        updateFunction(obj.id, updateObject)
            .then(()=> {
                const customersUpdated = data.map(customer => customer.id === obj.id ? updateObject : customer);
                setData(customersUpdated)
                showSucc('Successfully updated!', 1000, navTo);
            })
            .catch(err => showError(err, 1000, navTo))
            .finally(()=> resetItemsState());
     }

    const saveInvoice = () => { 
       let sendInvoiceData = {...obj}; 
       const {isValid, error} = validateInvoiceSendObj(sendInvoiceData);

        if(isValid && !error){
            if(mode === ADD_MODE) return genericAdd(addInvoice, sendInvoiceData); 
            
            genericUpdate(updateInvoice, sendInvoiceData);            
            
        }else{
            showInvalidDataError(error);
        }
    }

    const saveSeller = () => {
         const sendSellObj = {...obj}; 
         const {dataValidated, isValid, error} = validateSellerSendObj(sendSellObj); 

         if(!!isValid){
             if(mode === ADD_MODE) return genericAdd(addSeller, dataValidated); 

             genericUpdate(updateSeller, sendSellObj); 
            
         }else{
            showInvalidDataError(error);
         }
     }


     const saveCustomer = () => { 
        const sendCustObj = {...obj};
        const {dataValidated, isValid, error} = validateCustomerSendObj(sendCustObj);

        if(isValid){
            if(mode === ADD_MODE) return genericAdd(addCustomer, dataValidated);  

            genericUpdate(updateCustomer, dataValidated); 
        }
        else{
            showInvalidDataError(error);
        }   
     }

     const resetObjectSchema = () => {
        tittle === SELLERS && setObj(sellerSchema);
        tittle === CUSTOMERS && setObj(customerSchema);
        tittle === INVOICES && setObj(invoiceSchema);
     }


 const save = () => { 
        if(tittle === SELLERS) saveSeller();
        else if(tittle === CUSTOMERS) saveCustomer();
        else saveInvoice();
    }

  return {save, discard}
}

export default useFormData;

useFormData.defaultProps = {
    mode: ADD_MODE, 
    tittle: SELLERS, 
    obj: {}, 
    data: [], 
    setData: ()=>{}, 
    setManipulatePopup: ()=>{}, 
    setObj: ()=>{}, 
    setSelectedItems: ()=>{},
    setIsLoading: ()=>{}
}