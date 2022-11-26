import { customerSchema } from "../../../../data/objectSchema";
import { TextInputWrapp, LabelInput, TextInput } from "../../../../styled/modal/AddStyle";

const CustomerTemplate = ({ obj, setObj } ) => { 
    return(
      <>
        <TextInputWrapp>
            <LabelInput htmlfor='cuname'>Name</LabelInput>
            <TextInput id='cuname' value={obj.name} onChange={(e) => setObj({...obj, name: e.target.value})}
              />
        </TextInputWrapp>
    
        <TextInputWrapp>
            <LabelInput htmlfor='sname'>Surname</LabelInput>
            <TextInput id='sname' value={obj.surname} onChange={e => setObj({...obj, surname: e.target.value})}   />
        </TextInputWrapp>
    
        <TextInputWrapp>
            <LabelInput htmlfor='caddrr'>Address</LabelInput>
            <TextInput id='caddrr' value={obj.address} onChange={e => setObj({...obj, address: e.target.value})}  />
        </TextInputWrapp>
    
        <TextInputWrapp>
            <LabelInput htmlfor='age'>Age</LabelInput>
            <TextInput id='age' type='number' value={obj.age} onChange={e => setObj({...obj, age: e.target.value})} />
        </TextInputWrapp>
     </>
    )
}

export default CustomerTemplate;

CustomerTemplate.defaultProps = {
    obj: customerSchema,
    setObj: ()=>{}
}