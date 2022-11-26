import { DataWarningStyle, IconBox, Message, DataWarningWrapp } from "../../styled/modal/Warnings"; 
import CloseIcon from '@mui/icons-material/Close';

const DateWarning = ({setShowDateWarn}) => {
  return (
    <DataWarningWrapp>
        <DataWarningStyle>
            <IconBox>
                <CloseIcon onClick={() => setShowDateWarn(false)} />
            </IconBox>
            <Message>  The Date can't be in the Future! </Message>
        </DataWarningStyle>
    </DataWarningWrapp>
  )
}

export default DateWarning

DateWarning.defaultProps = {
  setShowDateWarn: ()=>{}
}