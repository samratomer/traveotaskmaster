import React from "react";
const Arrow = ({ direction, onClick, symbol }) => (
    <div className={`slide-arrow ${direction}`} onClick={onClick}>
        {symbol}
    </div>
);
export default Arrow;
