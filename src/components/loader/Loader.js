import { LoadWrapp, LoadBox, SpinBox } from "../../styled/loader/LoadStyle";
import loadin from './inf_loader.gif';

const Loader = () => {
  return (
    <LoadWrapp>
        <LoadBox>
           <SpinBox src={loadin} alt='load spinner' />    
        </LoadBox>
    </LoadWrapp>
  )
}

export default Loader