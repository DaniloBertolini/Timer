import styled from "styled-components";

export const Span = styled.span`
    font-size: 12rem;
    color: ${(props) => props.theme.colors.primaryText };
    text-shadow: 1px 1px 3px ${(props) => props.theme.colors.textShadow };
`

export const DivDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px;
`