import React from "react";
import { useContext } from "react";
import TableHead from "./TableHead";
import { TablerStyle } from "../../../styled/invoice/TableStyle";
import TablerBody from "./TablerBody";
import { MyContext } from "../../../context/AppContext";
import { INVOICES } from "../../../constanst/types";

const Tabler = ({tittle, data, counterIndex }) => {
  const {tabActive, selectedData, } = useContext(MyContext);
  const [activeMenuTab] = tabActive;
  const [selectedItems, setSelectedItems] = selectedData; 
  
  return (
    <TablerStyle>
        <TableHead activeMenuTab={activeMenuTab} />
        
        <TablerBody
          data={data} 
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          tittle={tittle}
          counterIndex={counterIndex}
          />
          
    </TablerStyle>
  )
}

export default React.memo(Tabler);

Tabler.defaultProps={
  tittle:INVOICES,
  data: [],
  counterIndex: 0
}