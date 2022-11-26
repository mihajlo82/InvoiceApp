import { useContext } from "react";
import { MyContext } from "../../context/AppContext";
import { SidebarStyled, IconWrappStyled, RoutesWrappStyled } from "../../styled/Sidebar";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupsIcon from '@mui/icons-material/Groups';
import HailIcon from '@mui/icons-material/Hail';
import { Link } from "react-router-dom";

const Sidebar = () => { 
    const {tabActive} = useContext(MyContext);
    const [activeMenuTab] = tabActive;
  return (
    <SidebarStyled>
        <RoutesWrappStyled>
            <Link to='/invoices' aria-label="Invoice link">
                <IconWrappStyled active={activeMenuTab===0}>
                    <DashboardCustomizeIcon />
                </IconWrappStyled>
            </Link>

            <Link to='/sellers' aria-label="Seller link">
                <IconWrappStyled active={activeMenuTab===1} >
                    <GroupsIcon />
                </IconWrappStyled>
            </Link>

            <Link to='/customers' aria-label="Customers link"> 
                <IconWrappStyled active={activeMenuTab===2}>
                  <HailIcon />
                </IconWrappStyled> 
            </Link>
        </RoutesWrappStyled>
    </SidebarStyled>
  )
}

export default Sidebar