import styled from "styled-components";

export const AddWrapp = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0, 0.5)
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

//backdrop modal
export const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.6);
`;

//FORM WRAPPER
export const Formix = styled.form`
    z-index: 999;
    width: 350px;
    padding: 20px;
    background-color: white;
    border-radius: 35px;
    border: 3px solid gray;
    display: flex;
    flex-direction: column;
`;


//HEADER MODAL
export const HeadForm = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const TitleForm = styled.h3`
    width: 90%;
    color: gray;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const CloseForm = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`;

//Inputs 
export const TextInputWrapp = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const LabelInput = styled.p`
    color: gray;
    font-weight: bold;
    text-align: left;
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 7px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items:center;
    border: 2px solid gray;
    border-radius: 5px;
    outline: none;
`;

export const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 26px;
    height: 26px;
    outline: none;
    margin-top: 5px;
`;

//buttons
export const Buttons = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Button = styled.button`
    width: 44%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid ${props => props.color === '#fcfcb1' ? '#e3e327' : '#48e340'};
    background-color: ${props => props.color};
    font-weight: bold;
`;

