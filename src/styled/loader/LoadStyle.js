import styled from "styled-components";

export const LoadWrapp = styled.section`
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.5);
    z-index: 9999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const LoadBox = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 0px 8px 2px rgba(255,255,255,0.75);
-webkit-box-shadow: 1px 0px 8px 2px rgba(255,255,255,0.75);
-moz-box-shadow: 1px 0px 8px 2px rgba(255,255,255,0.75);
`;


export const SpinBox = styled.img`
    width: 100%;
    height: 100%;
`;
