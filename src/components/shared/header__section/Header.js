import { HeaderStyled, HeaderBox} from "../../../styled/invoice/Invoices";
import { INVOICES } from "../../../constanst/types";

const Header = ({tittle}) => {
  return (
    <HeaderStyled>
       <HeaderBox>{tittle.toUpperCase()}</HeaderBox>
    </HeaderStyled>
  )
}

export default Header

Header.defaultProps = {
  tittle:INVOICES
}