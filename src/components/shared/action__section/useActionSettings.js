import { deleteSellers } from "../../../api_service/seller_service";
import { deleteInovices } from "../../../api_service/invoice_service";
import useFormAdd from "../../modal/create/customAdd/useFormAdd";
import { deleteCustomers } from "../../../api_service/customer_service";
import { INVOICES, SELLERS, CUSTOMERS} from "../../../constanst/types";
import { invoiceSchema } from "../../../data/objectSchema";

const useActionSettings = (tittle,allInvoices, selectedItems, data, setData, setDeleteModal, setSelectedItems,setIsLoading, setCounterIndex ) => {
    const {showSucc, showError} = useFormAdd(setDeleteModal); 

    const resetItems = () => {
        setIsLoading(false);
        setSelectedItems([]);
        setCounterIndex(0);
    }

    const checkIsInInvoices = () =>{
       const deletedIds = selectedItems.map( selectedItem => selectedItem.id); 

       if(tittle===SELLERS) return allInvoices.some(selItem => deletedIds.includes(selItem.seller.id));      
       else if(tittle===CUSTOMERS) return allInvoices.some(customerItem => deletedIds.includes(customerItem.customer.id));
       else return false;
    }

    const deleteItemsGeneric = (functionName) => {
        const checkIsItemUsedInInvoice = checkIsInInvoices(); 

        if(!checkIsItemUsedInInvoice){
            functionName(selectedItems)
                .then(()=> {
                    const deletedIds = selectedItems.map( selectedItem => selectedItem.id );
                    const filteredData = data.filter( item => {
                        if(deletedIds.includes(item.id)){
                            return false;
                        }
                        return true;
                    })
                    setData(filteredData);
                    showSucc('Successfully deleted!', 1200);
            })
            .catch(()=>showError('Delete failed!', 1500))
            .finally(()=> resetItems());
        }else{
            showError('Item is active in invoices!', 1500);
            resetItems();
        }
    }
    
    const deleteFunc =  () => {
        setIsLoading(true);
        if(tittle === SELLERS) deleteItemsGeneric(deleteSellers); 
        else if(tittle === INVOICES) deleteItemsGeneric(deleteInovices);
        else if(tittle === CUSTOMERS) deleteItemsGeneric(deleteCustomers); 
    }
  return {deleteFunc}
}

export default useActionSettings

useActionSettings.defaultProps = {
    tittle: INVOICES, 
    selectedItems: [],
    setData: ()=>{},
    setDeleteModal: ()=>{}, 
    setSelectedItems: ()=>{},
    setCounterIndex:() => {},
    setIsLoading: ()=>{},
    allInvoices: [{...invoiceSchema}]
}