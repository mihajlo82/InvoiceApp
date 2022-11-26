import { sellerSchema, customerSchema } from '../../data/objectSchema';

const useDropdown = ({ setObj, obj}) => { 
  
      const droppHandlerSeller = () => { 
          const selHold = document.querySelector('#dropSell');
          const optHold = selHold.selectedOptions[0];
          const selDetail = JSON.parse(optHold.getAttribute('data-value-seller'));
          !selDetail ? setObj({...obj, seller: {}, sellerId: ''}) : setObj({...obj, seller: selDetail, sellerId: selDetail.id});
      }
  
      const droppHandlerCustomer = () => { 
          const selHold = document.querySelector('#dropCust');
          const optHold = selHold.selectedOptions[0];
          const custDetail = JSON.parse(optHold.getAttribute('data-customer'));
          !custDetail ? setObj({...obj, customer: {}, customerId: ''}) : setObj({...obj, customer: custDetail, customerId: custDetail.id}); 
      }
  
  return {droppHandlerSeller, droppHandlerCustomer};
}

export default useDropdown;

useDropdown.defaultProp = { 
    setObj: ()=>{},
    obj: { 
      date: '', 
      amount: '', 
      sellerId: '', 
      customerId:'',
      seller: sellerSchema,
      customer:customerSchema
    }
}