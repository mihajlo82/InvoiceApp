import { PaginateBox } from "../../../../styled/paginate/PaginateStyle";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const LessThanBox = ({setCounterIndex}) => {
  return (
    <PaginateBox onClick={()=>setCounterIndex(prev => prev-3)}>
         <ChevronLeftIcon />
    </PaginateBox> 
  )
}

export default LessThanBox;

LessThanBox.defaultProps = {
    setCounterIndex: ()=>{} 
  }