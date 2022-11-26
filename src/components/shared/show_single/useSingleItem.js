import {useState, useEffect, useContext} from 'react';
import { getIndividualSeller } from '../../../api_service/seller_service';
import { getIndividualCustomer } from '../../../api_service/customer_service';
import useFormAdd from '../../modal/create/customAdd/useFormAdd';
import { MyContext } from '../../../context/AppContext';

const useSingleItem = ({type, id}) => {
    
    const {tabActive} = useContext(MyContext);
    const [_,setActiveMenuTab] = tabActive;
    const [singleObj, setSingleObj] = useState({});
    const [loadData, setLoadData] = useState(false);
    const {showErrorFetch} = useFormAdd();

  const genericFunctionCall = (name, id) => {
      type==='seller' ? setActiveMenuTab(1) : setActiveMenuTab(2);

      setLoadData(true)
        name(id)
          .then(res => setSingleObj(res.data))
          .catch(() => showErrorFetch('Error getting data!'))
          .finally(()=> setLoadData(false));
      }

      const callInitFunction = () =>{
          if(type ==='seller') genericFunctionCall(getIndividualSeller, id);
          else genericFunctionCall(getIndividualCustomer, id)
      }

      useEffect(()=>callInitFunction(), []);

  return {singleObj, loadData}
}

export default useSingleItem;

useSingleItem.defaultProps = {
  type: 'seller',
  id: ''
}