import { TablerBodyCell, Text } from "../../../../styled/invoice/TableStyle";

const SingleCustomerTable = ({item}) => {
  return (
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
  )
}

export default SingleCustomerTable