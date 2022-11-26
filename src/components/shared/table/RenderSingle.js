import { TablerBodyRowStyle, TablerBodyCell, Text, RowSpacing } from "../../../styled/invoice/TableStyle";
import { useEffect, useState } from "react";
import { INVOICES, SELLERS, CUSTOMERS } from "../../../constanst/types";

const RenderSingle = ({tittle, selectedItems, onClick, item, isChecked}) => {

//       const manipArray = () => {
//         const checkIsInArray = selectedItems.findIndex(x=> x.id === item.id);
//         checkIsInArray !== -1 ? setSelectedItems([...selectedItems].filter(x=> x.id !== item.id)) : setSelectedItems([...selectedItems, item])    
//   }
  return (
    <>
    <TablerBodyRowStyle choose={isChecked} onClick={()=>onClick(item)}>
        {tittle === INVOICES &&  
            <>
                <TablerBodyCell>
                    <Text to={`/sellerdetails/${item?.seller?.id}`}> {item?.seller?.name}</Text>
                </TablerBodyCell>
                
                <TablerBodyCell>
                    <Text to={`/customerdetails/${item?.customer?.id}`}> {item?.customer?.name}  </Text>
                </TablerBodyCell>
            
                <TablerBodyCell>{item.date}</TablerBodyCell>
                <TablerBodyCell>{parseInt(item?.amount)}.00$</TablerBodyCell>
            </>
        }

        {tittle === SELLERS &&  
            <>
            <TablerBodyCell>
                  <Text to={`/sellerdetails/${item?.id}`}>{item?.name}</Text>
              </TablerBodyCell>
              
              <TablerBodyCell>{item?.companyName}</TablerBodyCell>
            
              <TablerBodyCell>{item?.hqAddress}</TablerBodyCell>
              <TablerBodyCell>{item?.isActive ? 'Yes' : 'No'} </TablerBodyCell>          
            </>}


            {tittle === CUSTOMERS && 
            <>
            <TablerBodyCell>
                    <Text to={`/customerdetails/${item?.id}`}>{item?.name} </Text>
                </TablerBodyCell>
                
                <TablerBodyCell>
                    <Text to={`/customerdetails/${item?.id}`}> {item?.surname}</Text>
                </TablerBodyCell>

                <TablerBodyCell> {item?.address} </TablerBodyCell>
                <TablerBodyCell> {item?.age} </TablerBodyCell>
            </>
            
            }

    </TablerBodyRowStyle>

{/* 
    {tittle === INVOICES &&
        <TablerBodyRowStyle choose={isChecked} onClick={()=>onClick(item)}>
            <TablerBodyCell>
                <Text to={`/sellerdetails/${item?.seller?.id}`}> {item?.seller?.name}</Text>
            </TablerBodyCell>
            
            <TablerBodyCell>
                <Text to={`/customerdetails/${item?.customer?.id}`}> {item?.customer?.name}  </Text>
            </TablerBodyCell>
          
            <TablerBodyCell>{item.date}</TablerBodyCell>
            <TablerBodyCell>{parseInt(item?.amount)}.00$</TablerBodyCell>
        </TablerBodyRowStyle>}

        {tittle === SELLERS &&
          <TablerBodyRowStyle choose={isChecked} onClick={()=>onClick(item)}>
              <TablerBodyCell>
                  <Text to={`/sellerdetails/${item?.id}`}>{item?.name}</Text>
              </TablerBodyCell>
              
              <TablerBodyCell>{item?.companyName}</TablerBodyCell>
            
              <TablerBodyCell>{item?.hqAddress}</TablerBodyCell>
              <TablerBodyCell>{item?.isActive ? 'Yes' : 'No'} </TablerBodyCell>
          </TablerBodyRowStyle>}

          {tittle === CUSTOMERS &&
            <TablerBodyRowStyle choose={isChecked} onClick={()=>onClick(item)}>
                <TablerBodyCell>
                    <Text to={`/customerdetails/${item?.id}`}>{item?.name} </Text>
                </TablerBodyCell>
                
                <TablerBodyCell>
                    <Text to={`/customerdetails/${item?.id}`}> {item?.surname}</Text>
                </TablerBodyCell>

                <TablerBodyCell> {item?.address} </TablerBodyCell>
                <TablerBodyCell> {item?.age} </TablerBodyCell>
            </TablerBodyRowStyle>} */}


        <RowSpacing />
    </>
  )
}

export default RenderSingle;

RenderSingle.defaultProps = {
    item: {id:''}, 
    selectedItems: [], 
    setSelectedItems: ()=> {}, 
    tittle: INVOICES
  }