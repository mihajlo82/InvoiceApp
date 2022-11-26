import { DeleteWrapp, BodyDelete, TitleText, BtnDels, DeleteButton } from "../../../styled/modal/DeleteStyle";

const DeleteCheck = ({setDeleteModal, deleteFunc}) => {
  return (
    <DeleteWrapp>
        <BodyDelete>
            <TitleText>Are you sure ?</TitleText>
            <BtnDels>
                <DeleteButton confirm={true} onClick={deleteFunc}>Yes</DeleteButton>
                <DeleteButton confirm={false} onClick={()=>setDeleteModal(false)}>No</DeleteButton>
            </BtnDels>
        </BodyDelete>
    </DeleteWrapp>
  )
}

export default DeleteCheck

DeleteCheck.defaultProps = {
  deleteFunc: ()=>{},
  setDeleteModal: ()=>{}
}