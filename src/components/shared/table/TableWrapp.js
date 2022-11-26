import { TableStyleWrapp } from "../../../styled/invoice/TableStyle";
import Tabler from "./Tabler";
import Paginate from "../paginate/Paginate";
import { INVOICES, PER_PAGE } from "../../../constanst/types";

const TableWrapp = ({tittle, data, counterIndex, setCounterIndex }) => {  
   return (
    <TableStyleWrapp>
        <Tabler 
          tittle={tittle} 
          data={data} 
          counterIndex={counterIndex} 
        />
      {data.length > PER_PAGE && 
        <Paginate 
          totalPages= {parseInt(((data.length-1)/PER_PAGE)+1)} 
          currentPage={parseInt((counterIndex/PER_PAGE)+1)} 
          counterIndex={counterIndex} 
          setCounterIndex={setCounterIndex}  
      />}
    </TableStyleWrapp>
  )
}

export default TableWrapp

TableWrapp.defaultProps = {
  tittle: INVOICES,
  data: [],
  counterIndex: 0,
  setCounterIndex: ()=>{}
}