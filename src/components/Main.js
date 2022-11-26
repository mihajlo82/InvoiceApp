import { MainStyled } from "../styled/Main"
import Sidebar from "./sidebar/Sidebar";
import CustomRoutes from "./routes/CustomRoutes";

const Main = () => {
  return (
    <MainStyled>
        <Sidebar />
        <CustomRoutes /> 
    </MainStyled>
  )
}

export default Main