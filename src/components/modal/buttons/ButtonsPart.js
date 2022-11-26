import { Buttons, Button } from "../../../styled/modal/AddStyle"

const ButtonsPart = ({discard, save}) => {
  return (
    <Buttons>
        <Button aria-label='Discard close modal' type='button' color='#fcfcb1' onClick={discard}>Discard</Button>
        <Button aria-label='Save button modal' type='button' color='#b3faaf' onClick={save}> Save</Button>
    </Buttons>
  )
}

export default ButtonsPart;

ButtonsPart.defaultProps = {
    discard: ()=> {},
    save: ()=>{}
}