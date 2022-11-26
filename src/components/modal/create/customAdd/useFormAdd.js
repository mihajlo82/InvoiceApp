import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const useFormAdd = (setManipulatePopup) => {
    let navigate = useNavigate();

    const showSucc = (msg='Successfully!', time=1000, nav) => {
        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: time,
        });

        if(!!nav){
            navigate(nav)
        }else{
            setManipulatePopup(false)
        }
    }

    const showError = (msg='Error!', time=1000, nav) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: time,
        });
        
        if(!!nav){
            navigate(nav)
        }else{
            setManipulatePopup(false)
        }
    }

    const showErrorFetch = (msg='Error!', time=1200) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: time,
        }); 
    }

    const showInvalidDataError = (msg='Invalid data!', time=1000) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: time,
        });

    }

    const showSuccEdited = (msg='Successfully!', time=1000, nav) => {
        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: time,
        });

        setTimeout(()=> navigate(nav), time+600)
    }
    
  return {showSucc, showError, showErrorFetch, showInvalidDataError, showSuccEdited}
}

export default useFormAdd

useFormAdd.defaultProps= {
    setManipulatePopup:  ()=>{}
}