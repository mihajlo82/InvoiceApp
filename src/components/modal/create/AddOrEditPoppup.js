import { useContext, useState } from "react";
import { AddWrapp, Backdrop } from "../../../styled/modal/AddStyle";
import FormData from "./FormData";
import DateWarning from "../DateWarning";
import { MyContext } from "../../../context/AppContext";
import { ADD_MODE, INVOICES } from "../../../constanst/types"; 

const AddOrEditPoppup = ({mode, tittle, obj, setObj, setIsLoading}) => {
  const {appData, appManip, selectedData} = useContext(MyContext);
  const [data, setData] = appData;
  const [manipulatePopup, setManipulatePopup] = appManip;
  const [selectedItems, setSelectedItems] = selectedData;
  const [showDateWarn, setShowDateWarn] = useState(false);

  return (
    <AddWrapp> 
        <Backdrop /> 

        <FormData 
            data={data}
            setData={setData} 
            manipulatePopup={manipulatePopup} 
            setManipulatePopup={setManipulatePopup}
            setShowDateWarn={setShowDateWarn}
            mode={mode}
            selectedItems={selectedItems}
            tittle={tittle}
            obj={obj}
            setObj={setObj}
            setSelectedItems={setSelectedItems}
            setIsLoading={setIsLoading}
        /> 
          {showDateWarn && <DateWarning setShowDateWarn={setShowDateWarn} /> }
    </AddWrapp>
  )
}

export default AddOrEditPoppup

AddOrEditPoppup.defaultProps = {
  mode: ADD_MODE,
  tittle: INVOICES,
  obj: {},
  setObj: ()=>{}, 
  setIsLoading: ()=>{}
}