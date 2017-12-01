import React from 'react';
import PropType from 'prop-types';

import Deal from '../Deal';

const Deals = ({user}) => [
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
    <Deal key={Math.random()} />,
];
Deals.propType = {
    user: PropType.object,
};
Deals.defaultProps = {
    user: {},
}

export default Deals;
