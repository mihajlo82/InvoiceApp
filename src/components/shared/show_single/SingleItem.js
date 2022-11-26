import { SingleWrapp, SingleBox } from "../../../styled/single_item/SingleItem";
import { useParams } from "react-router-dom";
import Header from "../header__section/Header"; 
import SingleSeller from "./SingleSeller";
import SingleCustomer from "./SingleCustomer";
import useSingleItem from "./useSingleItem";
import Loader from "../../loader/Loader";
import { SELLER_SINGLE, CUSTOMER_SINGLE } from "../../../constanst/types";

const SingleItem = ({type}) => {
    const {id} = useParams();
    const {singleObj, loadData} = useSingleItem({type, id});

  return (
    <SingleWrapp>
        <Header tittle={type} />

        {!loadData && <SingleBox>
            {type === SELLER_SINGLE && <SingleSeller item={singleObj} type={type} />}
            {type === CUSTOMER_SINGLE && <SingleCustomer item={singleObj} type={type} />}
        </SingleBox>}

        {loadData && <Loader />}
    </SingleWrapp>
  )
}

export default SingleItem;

SingleItem.defaultProps = {
  type: SELLER_SINGLE
}