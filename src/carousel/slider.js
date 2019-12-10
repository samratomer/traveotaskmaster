import React from "react";
import Card from "../card/card";

const Slider = ({ travelInfo, width, height }) => {
    return (
        <div style={{ width: width - 100, height: height - 100 }}>
            <Card
                travelInfo={travelInfo}
                width={width-100}
                height={height-100}
            />
        </div>
    );
};

export default Slider;
