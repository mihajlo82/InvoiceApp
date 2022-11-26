import { TablerBodyCell, Text } from "../../../../styled/invoice/TableStyle"

const SingleSellerTable = ({item}) => {
  return (
    <>
    <TablerBodyCell>
        <Text to={`/sellerdetails/${item?.id}`}>{item?.name}</Text>
    </TablerBodyCell>
        
    <TablerBodyCell>{item?.companyName}</TablerBodyCell>
    
    <TablerBodyCell>{item?.hqAddress}</TablerBodyCell>
    <TablerBodyCell>{item?.isActive ? 'Yes' : 'No'} </TablerBodyCell>          
    </>
  )
}

export default SingleSellerTable