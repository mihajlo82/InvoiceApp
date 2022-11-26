import { TextInputWrapp, LabelInput, TextInput } from "../../../../styled/modal/AddStyle";
import Dropdown from "../../../dropdown/Dropdown";
import { checkValidDate } from "../../../../validations/validate_invoice";
import { sellerSchema, customerSchema } from "../../../../data/objectSchema";
import moment from "moment";
import { ADD_MODE } from "../../../../constanst/types";

const InvoiceTemplate = ({obj, setObj, mode, setShowDateWarn}) => {

  const handleAmount = e => setObj({...obj, amount: e.target.value});

  const dateHandler = e => {
      const isValid = checkValidDate(e);     
      isValid ? setObj({...obj, date: moment(e.target.value).format('YYYY-MM-DD')}) : setShowDateWarn(true);
  }
  
  return (
    <>
      <TextInputWrapp>
          <LabelInput htmlfor='seller'>Seller</LabelInput>
          <Dropdown id='seller' obj={obj} setObj={setObj} type='seller' mode={mode} />
      </TextInputWrapp>

      <TextInputWrapp>
          <LabelInput htmlfor='customer'>Customer</LabelInput>
          <Dropdown id='customer' type='customer' obj={obj} mode={mode} setObj={setObj} />
      </TextInputWrapp>

      <TextInputWrapp>
          <LabelInput htmlfor='date'>Date</LabelInput>
          <TextInput id='date' type="date" onChange={dateHandler} value={obj.date} />
      </TextInputWrapp>

      <TextInputWrapp>
          <LabelInput htmlfor='amount'>Amount</LabelInput>
          <TextInput id='amount' type="number" value={!!obj.amount ? parseInt(obj.amount) : ''} onChange={handleAmount} />
      </TextInputWrapp>
      </>
    )
}

export default InvoiceTemplate

InvoiceTemplate.defaultProps = {
  mode:ADD_MODE,
  setObj: ()=>{},
  setShowDateWarn: ()=>{},
  invoiceObj:{ 
    date: moment().format('YYYY-MM-DD'), 
    amount: '', 
    sellerId: '', 
    customerId:'',
    seller: sellerSchema,
    customer:customerSchema
  }
};
