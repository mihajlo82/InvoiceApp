import { useContext } from "react";
import { MyContext } from "../../context/AppContext";
import { InvoicesStyled } from "../../styled/invoice/Invoices";
import AddOrEditPoppup from "../modal/create/AddOrEditPoppup";
import ActionsSection from "../shared/action__section/ActionsSection";
import Header from "../shared/header__section/Header";
import TableWrapp from "../shared/table/TableWrapp"; 
import { ToastContainer } from 'react-toastify';
import useInvoice from "./useInvoice";
import { INVOICES, ADD_MODE } from "../../constanst/types";
import Loader from "../loader/Loader";

const Invoices = ({tittle}) => {
  const {tabActive, appData, appManip, selectedData, loadData, pageCounter, allInvoicesData} = useContext(MyContext);
  const [_, setActiveMenuTab] = tabActive;
  const [data, setData] = appData;
  const [manipulatePopup, setManipulatePopup] = appManip;
  const [selectedItems,setSelectedItems] = selectedData;
  const [isLoading, setIsLoading] = loadData;
  const [counterIndex, setCounterIndex] = pageCounter;
  const [allInvoices] = allInvoicesData;
  
  const {dataObjectSchema, setDataObjectSchema} = useInvoice({tittle, data, setData, setActiveMenuTab, setSelectedItems, setManipulatePopup, setIsLoading, setCounterIndex});

  return (
    <InvoicesStyled>
        <Header tittle={tittle} />

        <ActionsSection 
            tittle={tittle}
            setManipulatePopup={setManipulatePopup} 
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems}
            data={data}
            setData={setData}
            setIsLoading={setIsLoading}
            setCounterIndex={setCounterIndex}
            allInvoices={allInvoices}
          /> 

         <TableWrapp 
            tittle={tittle} 
            data={data} 
            setData={setData}
            counterIndex={counterIndex}
            setCounterIndex={setCounterIndex} 
        />

         {manipulatePopup && 
           <AddOrEditPoppup 
             data={data} 
             setData={setData} 
             manipulatePopup={manipulatePopup}
             setManipulatePopup={setManipulatePopup}
             mode={ADD_MODE}
             tittle={tittle}
             setIsLoading={setIsLoading}
             obj={dataObjectSchema}
             setObj={setDataObjectSchema}
           /> }
      
          {isLoading && <Loader />}
          
          <ToastContainer />
    </InvoicesStyled>
  )
}

export default Invoices

Invoices.defaultProps = {
  tittle: INVOICES
}