import { Formix } from "../../../styled/modal/AddStyle";
import useFormData from "./customAdd/useFormData"; 
import DataTemplate from "./templates/DataTemplate";
import { ADD_MODE, INVOICES } from "../../../constanst/types";
import FormHeader from "../header/FormHeader";
import ButtonsPart from "../buttons/ButtonsPart";

const FormData = ({data, setData, setManipulatePopup, setShowDateWarn, mode, tittle, obj, setObj, setSelectedItems, setIsLoading}) => {
     const {save, discard} = useFormData({ setIsLoading, setObj, mode, setShowDateWarn, tittle, setData, data, setManipulatePopup, obj, setSelectedItems});

  return (
    <Formix> 
        <FormHeader 
            mode={mode} 
            tittle={tittle} 
            setManipulatePopup={setManipulatePopup}
             />

        <DataTemplate 
            tittle={tittle} 
            mode={mode}
            setShowDateWarn={setShowDateWarn}
            obj={obj}
            setObj={setObj}
            /> 

        <ButtonsPart 
            discard={discard}
            save={save}
            />

    </Formix>
  )
}

export default FormData

FormData.defaultProps = {
    data: [],
    mode:ADD_MODE,
    tittle: INVOICES,
    obj:{},
    setData: ()=>{}, 
    setManipulatePopup: ()=>{},
    setShowDateWarn: ()=>{},
    setSelectedItems:  ()=>{}
}