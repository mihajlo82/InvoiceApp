import { ParagraphSingle } from "../../../styled/single_item/SingleItem";
import { sellerSchema } from "../../../data/objectSchema";

const SingleSeller = ({item}) => {
  return (
    <>
        <ParagraphSingle> Name: {item?.name} </ParagraphSingle>
        <ParagraphSingle> Company: {item?.companyName} </ParagraphSingle>
        <ParagraphSingle> Address: {item?.hqAddress}  </ParagraphSingle>
        <ParagraphSingle> Status: {item?.isActive ? 'active' : 'not active'} </ParagraphSingle> 
    </>
  )
}

export default SingleSeller

SingleSeller.defaultProps = {
  item: sellerSchema
}