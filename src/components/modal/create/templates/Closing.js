import { CloseForm } from "../../../../styled/modal/AddStyle";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Closing = ({mode, tittle, setManipulatePopup}) => {
  return (
    <CloseForm >
        {mode === 'edit' ? 
            (tittle === 'INVOICES') ?
                <Link to='/invoice'>
                    <CloseIcon />
                </Link> : 
                    (tittle === 'SELLERS') ?
                        <Link to='/sellers'>
                            <CloseIcon />
                        </Link> :
                            
                            <Link to='/customers'>
                                <CloseIcon />
                            </Link>
            : 
            <CloseIcon onClick={() =>setManipulatePopup(false)}  />}
    </CloseForm>
  )
}

export default Closing;

Closing.defaultProps = {
    mode:'add', 
    tittle: 'INVOICES', 
    setManipulatePopup: ()=>{}
}