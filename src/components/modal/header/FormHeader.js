import { HeadForm, TitleForm } from "../../../styled/modal/AddStyle";
import Closing from "../create/templates/Closing";
import { EDIT_MODE, ADD_MODE, INVOICES } from "../../../constanst/types";

const FormHeader = ({mode, tittle, setManipulatePopup}) => {
  return (
    <HeadForm>
        <TitleForm>{mode === EDIT_MODE ? 'EDIT ITEM': 'ADD ITEM'}</TitleForm>
        <Closing 
            mode={mode} 
            tittle={tittle} 
            setManipulatePopup={setManipulatePopup} 
            />
    </HeadForm>
  )
}

export default FormHeader;

FormHeader.defaultProps = {
    mode: ADD_MODE,
    tittle: INVOICES,
    setManipulatePopup: ()=>{}
}