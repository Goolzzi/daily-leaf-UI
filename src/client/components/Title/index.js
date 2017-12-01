import styled from 'styled-components';


const Title = styled.h1`
    font-family: Montserrat;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.17;
    text-align: ${props => (props.align || 'left')};
    color: ${props => (props.color ? props.color : 'black')};
`;

export default Title;
