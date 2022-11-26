import { HeadCol, TablerHead, TablerHeadWrapp } from '../../../styled/invoice/TableStyle';
import { TableSpacing } from '../../../styled/invoice/TableStyle';

const TableHead = ({activeMenuTab}) => {
  return (
    <TablerHeadWrapp>

     {activeMenuTab === 0 && 
      <TablerHead>
            <HeadCol>Seller</HeadCol>
            <HeadCol>Customer</HeadCol>
            <HeadCol>Date</HeadCol>
            <HeadCol>Amount</HeadCol>
        </TablerHead> }

      {activeMenuTab === 1 &&
        <TablerHead>
            <HeadCol>Name</HeadCol>
            <HeadCol>Company Name</HeadCol>
            <HeadCol>Address</HeadCol>
            <HeadCol>Active</HeadCol>
        </TablerHead> }

      {activeMenuTab === 2 && 
        <TablerHead>
            <HeadCol>Name</HeadCol>
            <HeadCol>Surname</HeadCol>
            <HeadCol>Address</HeadCol>
            <HeadCol>Age</HeadCol>
        </TablerHead> }
      
      <TableSpacing />
    </TablerHeadWrapp>
  )
}

export default TableHead

TableHead.defaultProps = {
  activeMenuTab: 0
}