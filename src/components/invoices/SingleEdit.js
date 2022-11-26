import { SingleEdStyle } from "../shared/edit/SingleEditStyle";
import { useParams } from "react-router-dom";
import AddOrEditPoppup from "../modal/create/AddOrEditPoppup"; 
import { ToastContainer } from "react-toastify";
import { SELLERS, EDIT_MODE } from "../../constanst/types";
import { useContext } from "react";
import { MyContext } from "../../context/AppContext";
import Loader from "../loader/Loader";
import useSingleEdit from "./useSingleEdit";

const SingleEdit = ({tittle}) => {
    const {loadData} = useContext(MyContext);
    const [isLoading, setIsLoading] = loadData;
    const {id} = useParams();  
    const {itemObj, setItemObj} = useSingleEdit({tittle, id}); 
    
   return (
    <SingleEdStyle>
        <AddOrEditPoppup 
            mode={EDIT_MODE} 
            tittle={tittle} 
            obj={itemObj} setObj={setItemObj} 
            setIsLoading={setIsLoading}
             />
        
        <ToastContainer />
        {isLoading && <Loader />}
    </SingleEdStyle>
  )
}

export default SingleEdit

SingleEdit.defaultProps = {
    tittle: SELLERS
}