import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const Header = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const Results = styled.h5`
    font-size: 14px;
    letter-spacing: 1.3px;
    text-align: left;
    color: #4a4a4a;
    font-family: Montserrat;
    font-weight: 500;
`;
const SortTypeView = styled.div`

`;
const SortLabel = styled.label`
    font-family: Montserrat;
    font-size: 13px;
    text-align: left;
    color: #5b5d69;
    padding: 0 1rem;
`

class ResultsHeader extends React.Component {
    render() {
        return (
            <Header>
                <Results>
                    55 RESULTS
                </Results>
                <SortTypeView>
                    <SortLabel>Sort By</SortLabel>
                    <Dropdown text="Price" />
                </SortTypeView>
            </Header>
        )
    }
}
export default ResultsHeader;