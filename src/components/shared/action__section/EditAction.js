import { Link } from "react-router-dom";
import { PathLink} from "../../../styled/invoice/Invoices";
import EditIcon from '@mui/icons-material/Edit';

const EditAction = ({selectedItems, tittle}) => {
    return (
    <>
        {selectedItems.length === 1 && tittle === 'INVOICES' &&  
        <PathLink to={`/invoices/${selectedItems[0]?.id}`}>
            <EditIcon />
        </PathLink>    
        }

        {selectedItems.length === 1 && tittle === 'SELLERS' &&
            <PathLink to={`/sellers/${selectedItems[0]?.id}`}>
                <EditIcon />
            </PathLink> 
        }  

        {selectedItems.length === 1 && tittle === 'CUSTOMERS' &&
            <PathLink to={`/customers/${selectedItems[0]?.id}`}>
                <EditIcon />
            </PathLink> 
        }  

        {selectedItems.length !== 1 && <EditIcon />}
    </>
 )
}

export default EditAction