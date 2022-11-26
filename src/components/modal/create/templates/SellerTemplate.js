import { sellerSchema } from "../../../../data/objectSchema"
import { TextInputWrapp, LabelInput, TextInput, Checkbox } from "../../../../styled/modal/AddStyle"

const SellerTemplate = ({setObj, obj}) => {
  return (
    <>
    <TextInputWrapp>
        <LabelInput htmlfor="name">Name</LabelInput>
        <TextInput id="name" value={obj.name} onChange={e => setObj({...obj, name: e.target.value})} />
    </TextInputWrapp>

    <TextInputWrapp>
        <LabelInput htmlfor="cname" >Company</LabelInput>
        <TextInput  id="cname" value={obj.companyName} onChange={e => setObj({...obj, companyName: e.target.value})} />
    </TextInputWrapp>

    <TextInputWrapp>
        <LabelInput htmlfor="address">Address</LabelInput>
        <TextInput id="address" value={obj.hqAddress} onChange={e => setObj({...obj, hqAddress: e.target.value})} />
    </TextInputWrapp>

    <TextInputWrapp>
        <LabelInput htmlfor="active">Active</LabelInput>
        <Checkbox id="active" type="checkbox" checked={obj.isActive} value={obj.isActive} onChange={e => setObj({...obj, isActive: e.target.checked})} />
    </TextInputWrapp>
    </>
  )
}

export default SellerTemplate

SellerTemplate.defaultProps = {
  setSellerObj: ()=> {},
  sellerObj: sellerSchema
}