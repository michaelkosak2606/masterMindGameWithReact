import React from 'react';
import ReactLoading from 'react-loading';

const loadingCircle = ({ type, color }) => (
    <div className="loading">
        <span>Loading new game</span>
        <ReactLoading type={"spin"} color={"white"} height={40} width={40} />
    </div>
);

export default loadingCircle;