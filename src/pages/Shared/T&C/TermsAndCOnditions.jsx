import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCOnditions = () => {
    return (
        <div>
            <h2>T&C</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam minima voluptates tenetur unde debitis porro nesciunt dolores non inventore impedit. Harum voluptate saepe expedita quas natus hic repellat accusantium reprehenderit!</p>
            <p>Go back to <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndCOnditions;