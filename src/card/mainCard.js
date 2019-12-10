import React from "react";

export default class MainCard extends React.Component {
    _renderIcons = () => {

    };

    render() {
        const { travelInfo } = this.props;
        return (
            <div className="card-main-body">
                <div className={"card-center-div"}>
                    <p className={"card-mode-of-travel-p"}>{travelInfo.modeOfTravel}</p>
                </div>
                <div>
                    <div className={"card-time-div"}>
                        <p className={"card-time-p"}>{travelInfo.arrivalTime}</p>
                        <p className={"card-time-p"}>{travelInfo.departureTime}</p>
                    </div>
                    <div className={"card-time-div"}>
                        <p className={"card-date-p"}>{travelInfo.travelDate}</p>
                        <p className={"card-date-p"}>{travelInfo.travelDate}</p>
                    </div>
                </div>
                <div style={{ marginTop: 15 }}>
                    <div className={"card-time-div"}>
                        <p className={"card-time-p card-price-p"}>
                            {travelInfo.saverPrice}
                        </p>
                        <p className={"card-time-p card-price-p"}>
                            {travelInfo.finalPrice}
                        </p>
                    </div>
                    <div className={"card-time-div"}>
                        <p
                            className={"card-date-p card-price-mode-p"}
                            style={{ backgroundColor: "#2ca352" }}
                        >
                            Saver Price
                        </p>
                        <p
                            className={"card-date-p card-price-mode-p "}
                            style={{ backgroundColor: "#379dff" }}
                        >
                            Final Price
                        </p>
                    </div>
                </div>

                <div className={"card-time-div"}>
                    <p className={"card-travel-info-p"}>{travelInfo.pnr}</p>
                    <p className={"card-travel-info-p"}>{travelInfo.duration}</p>
                </div>
            </div>
        );
    }
}
