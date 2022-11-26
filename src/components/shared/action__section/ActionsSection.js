import { useState } from "react";
import { ActionsWrapp, Actions, ActionBox} from "../../../styled/invoice/Invoices";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteCheck from "../../modal/delete/DeleteCheck";
import useActionSettings from "./useActionSettings";
import EditAction from "./EditAction";
import { INVOICES } from "../../../constanst/types";

const ActionsSection = ({tittle, setManipulatePopup, selectedItems, setSelectedItems, data, setData, setIsLoading, setCounterIndex, allInvoices}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const {deleteFunc} = useActionSettings(tittle,allInvoices, selectedItems, data, setData, setDeleteModal, setSelectedItems, setIsLoading, setCounterIndex);

  return (
    <ActionsWrapp>
        <Actions>
            <ActionBox type='button' aria-label="add" onClick={()=> setManipulatePopup(true)} color='#b3faaf' typer='add'>
                <AddIcon />
            </ActionBox>

            <ActionBox type='button' aria-label="edit" disabled={selectedItems.length !== 1} typer='edit' color={selectedItems.length === 1 ? '#fcfcb1' : 'white'}>     
                <EditAction selectedItems={selectedItems} tittle={tittle} />               
            </ActionBox>

            <ActionBox type='button' aria-label="delete" disabled={selectedItems.length === 0} typer='delete' color={selectedItems.length === 0 ? 'white' : '#faa7a7'} >
                <ClearIcon onClick={()=> selectedItems.length !== 0 && setDeleteModal(true)}/>
            </ActionBox>
        </Actions>

        {deleteModal && <DeleteCheck setDeleteModal={setDeleteModal} deleteFunc={deleteFunc} /> }
    </ActionsWrapp>
  )
}

export default ActionsSection

ActionsSection.defaultProps={
    tittle:INVOICES,
    data: [{}],
    selectedItems: [],
    setIsLoading: ()=>{},
    setManipulatePopup: ()=>{},
    setData: ()=>{},
    setCounterIndex: ()=>{},
    setSelectedItems: ()=>{},
}