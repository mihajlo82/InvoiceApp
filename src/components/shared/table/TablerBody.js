import TablerSingle from "./TablerSingle";
import { TablerBodyWrappStyle } from "../../../styled/invoice/TableStyle";
import { INVOICES } from "../../../constanst/types";

const TablerBody = ({data, selectedItems, setSelectedItems, tittle, counterIndex}) => {
  
  const onItemClick = (item) => { 
    const checkIsInArray = selectedItems.findIndex(x=> x.id === item.id);
    checkIsInArray !== -1 ? setSelectedItems(selectedItems.filter(x=> x.id !== item.id)) : setSelectedItems(selectedItems.concat(item))
  }

  const findItem = (allData, item, type) => {
    if(type=== 'seller'){
      const singleSeller = allData.find(seller => seller.id === item?.seller?.id); 
      return singleSeller;
    }else{
      const singleCustomer = allData.find(customer => customer.id === item?.customer?.id); 
      return singleCustomer;
    }
  }

  return (
    <TablerBodyWrappStyle>
      {!!data.length > 0 && data.map((item, i) => 
        (i >= counterIndex && i< counterIndex+3) && 
            <TablerSingle
                key={item.id} 
                item={item}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                tittle={tittle}
                isChecked={selectedItems.some(selectedItem => selectedItem.id === item.id)}
                onClick={onItemClick}
                findItem={findItem}
              />  
        )} 
             
    </TablerBodyWrappStyle>
  )
}

export default TablerBody

TablerBody.defaultProps = {
  data: [], 
  selectedItems: [], 
  setSelectedItems: ()=>{}, 
  tittle: INVOICES,
  counterIndex: 0
}