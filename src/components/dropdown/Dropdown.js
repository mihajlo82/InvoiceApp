import { DropDown, Option } from "../../styled/dropdown/DropdownStyle";
import useDropdown from "./useDropdown";
import { ADD_MODE } from "../../constanst/types";
import { customerSchema, sellerSchema } from "../../data/objectSchema";
import useFetch from "../../context/useFetch";
import { SELLER_SINGLE, CUSTOMER_SINGLE } from "../../constanst/types";

const Dropdown = ({type, obj, setObj, mode}) => {  
    const {allSellers, allCustomers} = useFetch();
    const {droppHandlerSeller, droppHandlerCustomer} = useDropdown({setObj, obj});
    
  if(type === SELLER_SINGLE){
      return (
        <DropDown id="dropSell" onChange={droppHandlerSeller}  >
            {mode === ADD_MODE && <Option></Option>}
            {!!allSellers?.length > 0 && allSellers.map(item => item.isActive && <Option data-value-seller={JSON.stringify(item)} selected={item.id === obj?.seller?.id} key={item.id}> {item.name} </Option> )}  
        </DropDown>
      )
    }else if(type === CUSTOMER_SINGLE)
      return (
        <DropDown id="dropCust" onChange={droppHandlerCustomer}  >
            {mode === ADD_MODE && <Option></Option>}
            {!!allCustomers?.length > 0 && allCustomers.map(item => <Option data-customer={JSON.stringify(item)} selected={item.id === obj?.customer?.id} key={item.id}>{item.name} {item.surname} </Option>)}  
        </DropDown>
      )
  }

export default Dropdown

Dropdown.defaultProps = {
    type: SELLER_SINGLE,
    mode: ADD_MODE,
    setObj: ()=>{},
    obj: { 
      date: '', 
      amount: '', 
      sellerId: '', 
      customerId:'',
      seller: sellerSchema,
      customer:customerSchema
    }
};
