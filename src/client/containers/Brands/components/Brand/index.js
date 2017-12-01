import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Inner } from '../../../../components/Core';

const StyledLink = styled(Link)`
    height: 350px;
    display: flex;
    justify-content: center;
    margin: 1em 0;
    align-items: center;
    border-radius: 5px;
	background-color: #ffffff;
	border: solid 1px #d5d5d5;
`;
const Card = styled.div`
    
`;
const Brand = props => (
    <StyledLink to={`/brand-detail/${props.brandID}`}>
        <Card>
            <Image src={props.brandImg} alt='brand'></Image>
        </Card>
    </StyledLink>
)
Brand.propTypes = {
    brandID: PropTypes.string,
};
Brand.defaultProps = {
    brandID: 'BrandID',
};
export default Brand;