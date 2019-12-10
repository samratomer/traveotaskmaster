import React from "react";
import DummyData from "../dummydata";
import Arrow from "./arrow";
import Slider from "./slider";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = DummyData.length - 1;
        const { activeIndex } = this.state;
        const shouldResetIndex = activeIndex === 0;
        const index = shouldResetIndex ? lastIndex : activeIndex - 1;

        this.setState({
            activeIndex: index
        });
    }

    nextSlide() {
        const lastIndex = DummyData.length - 1;
        const { activeIndex } = this.state;
        const shouldResetIndex = activeIndex === lastIndex;
        const index = shouldResetIndex ? 0 : activeIndex + 1;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        const { width, height } = this.props;
        return (
            <div
                className="carousel-main-card"
                style={{ width: width, height: height }}
            >
                <Arrow direction="left" onClick={this.previousSlide} symbol="&#9664;" />
                <Slider
                    travelInfo={DummyData[this.state.activeIndex]}
                    width={width}
                    height={height}
                />
                <Arrow direction="right" onClick={this.nextSlide} symbol="&#9654;" />
            </div>
        );
    }
}
