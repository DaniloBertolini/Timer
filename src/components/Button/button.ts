import styled from "styled-components";

export const Button = styled.button`
    background-color: rgba(13,39,142,0.1);
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.primaryText};
    color: ${(props) => props.theme.colors.primaryText};
    cursor: pointer;
    font-size: 1.4rem;
    padding: 25px;
    margin: 0 30px;
    text-shadow: 0.2px 0.2px 0.5px ${(props) => props.theme.colors.textShadow };
`