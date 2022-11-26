import CustomerTemplate from "./CustomerTemplate";
import InvoiceTemplate from "./InvoiceTemplate";
import SellerTemplate from "./SellerTemplate";
import { SELLERS, CUSTOMERS, INVOICES, ADD_MODE } from "../../../../constanst/types";
import { sellerSchema, customerSchema } from "../../../../data/objectSchema";

const DataTemplate = ({tittle, mode,setShowDateWarn, setObj, obj }) => {
  return (
    <>
        {tittle === CUSTOMERS && <CustomerTemplate setObj={setObj} obj={obj} /> }

        {tittle === SELLERS && <SellerTemplate setObj={setObj} obj={obj} />}

        {tittle === INVOICES && <InvoiceTemplate setObj={setObj} obj={obj} mode={mode} setShowDateWarn={setShowDateWarn} />}
    </>
  )
}

export default DataTemplate

DataTemplate.defaultProps = {
    setShowDateWarn: ()=>{},
    mode: ADD_MODE,
    tittle: INVOICES,
    invoiceObj:{ 
        date:'', 
        amount: '', 
        sellerId: '', 
        customerId:'',
        seller: sellerSchema,
        customer:customerSchema
      },
    seller: sellerSchema,
    customer: customerSchema
};
