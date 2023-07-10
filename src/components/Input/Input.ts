import styled from "styled-components";

export const Input = styled.input`
    background-color: rgba(${(props) => props.theme.colors.button}, 0.1);
    border: 1px solid ${(props) => props.theme.colors.primaryText};

    color: white;
    padding: 8px;
    width: 100px;
    
    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`