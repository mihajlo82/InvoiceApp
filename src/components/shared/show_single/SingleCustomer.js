import { ParagraphSingle } from "../../../styled/single_item/SingleItem";
import { customerSchema } from "../../../data/objectSchema";

const SingleCustomer = ({item}) => {
  return (
    <>
        <ParagraphSingle> Name: {item?.name} </ParagraphSingle>
        <ParagraphSingle> Surname: {item?.surname} </ParagraphSingle>
        <ParagraphSingle> Address: {item?.address}  </ParagraphSingle>
        <ParagraphSingle> Age: {item?.age} </ParagraphSingle> 
    </>
  )
}

export default SingleCustomer

SingleCustomer.defaultProps = {
  item:customerSchema
}