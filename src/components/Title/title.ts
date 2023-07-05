import styled from "styled-components";

export const Title = styled.h1`
    font-size: 4rem;
    padding: 50px;
    margin: 20px 0 30px 0;
    color: ${(props) => props.theme.colors.primaryText };
    border-bottom: 1px solid transparent;
    text-shadow: 1px 1px 3px ${(props) => props.theme.colors.textShadow };
`