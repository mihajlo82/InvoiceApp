import { PaginateBox } from "../../../../styled/paginate/PaginateStyle";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const GreaterThanBox = ({setCounterIndex}) => {
  return (
    <PaginateBox onClick={()=>setCounterIndex(prev => prev+3)}>
        <ChevronRightIcon />
    </PaginateBox>
  )
}

export default GreaterThanBox;

GreaterThanBox.defaultProps = {
    setCounterIndex: ()=>{} 
  }