import { PaginateStyleWrapp,PaginateBoxWrapp, PaginateBox,PaginateBoxLast } from '../../../styled/paginate/PaginateStyle';
import LessThanBox from './deatail_paginate/LessThanBox';
import GreaterThanBox from './deatail_paginate/GreaterThanBox';

const Paginate = ({totalPages, currentPage, counterIndex, setCounterIndex}) => {  
  return (
    <PaginateStyleWrapp>
        <PaginateBoxWrapp>
            {counterIndex >= 1 && <LessThanBox setCounterIndex={setCounterIndex} />}
            <PaginateBox> {currentPage}</PaginateBox>
            {currentPage < totalPages && <GreaterThanBox setCounterIndex={setCounterIndex}/>}
            {totalPages > 1 && <PaginateBoxLast> {totalPages} </PaginateBoxLast> }
        </PaginateBoxWrapp>
    </PaginateStyleWrapp>
  )
}

export default Paginate

Paginate.defaultProps = {
  counterIndex: 0, 
  setCounterIndex: ()=>{},
  currentPage: 1,
  totalPages: 1
}