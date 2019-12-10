import React from "react";
import MainCard from "./mainCard";
export default class Card extends React.Component {
    render() {
        const { travelInfo, width, height } = this.props;
        return <MainCard travelInfo={travelInfo} style={{ width, height }} />;
    }
}
