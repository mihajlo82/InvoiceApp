import { TablerBodyCell, Text } from "../../../../styled/invoice/TableStyle"; 
import useSingleInvoice from "./useSingleInvoice";
import { invoiceSchema } from "../../../../data/objectSchema";

const SingleInvoiceTable = ({item, findItem}) => {
  const {sellerName, customerName} = useSingleInvoice(item, findItem); 
  return (
    <>
        <TablerBodyCell>
            <Text to={`/sellerdetails/${item?.seller?.id}`}> {sellerName}</Text>
        </TablerBodyCell>
        
        <TablerBodyCell>
            <Text to={`/customerdetails/${item?.customer?.id}`}> {customerName} </Text>
        </TablerBodyCell>

        <TablerBodyCell>{item.date}</TablerBodyCell>
        <TablerBodyCell>{parseInt(item?.amount)}.00$</TablerBodyCell>
    </>
  )
}

export default SingleInvoiceTable;

SingleInvoiceTable.defaultProps = {
  item: invoiceSchema,
  findItem: ()=>{}
}