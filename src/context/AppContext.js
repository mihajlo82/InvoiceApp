import { createContext, useState } from "react";
import useFetch from "./useFetch";
export const MyContext = createContext(null);

const AppContext = ({children}) => {
    const [activeMenuTab, setActiveMenuTab] = useState(0);
    const [data, setData] = useState([]);
    const [manipulatePopup, setManipulatePopup] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [counterIndex, setCounterIndex] = useState(0); 
    const {allInvoices, setAllInvoices} = useFetch(data); 

  return (
    <MyContext.Provider
        value={{
            tabActive: [activeMenuTab, setActiveMenuTab],
            appData: [data, setData],
            appManip: [manipulatePopup, setManipulatePopup],
            selectedData: [selectedItems, setSelectedItems],
            loadData:[isLoading, setIsLoading],
            pageCounter: [counterIndex, setCounterIndex],
            allInvoicesData: [allInvoices, setAllInvoices]
        }}>
        {children}
    </MyContext.Provider>
  )
}

export default AppContext