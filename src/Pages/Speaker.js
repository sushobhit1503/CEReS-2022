import React from "react"
import SpeakerIll from "../Assets/Speaker.png"
import Bar from "../Components/Bar"

class Speaker extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading" >
                            SPEAKER TAGLINE
                        </div>
                        <div className="land-description">
                            COMING SOON
                        </div>
                    </div>
                    <div>
                        <img src={SpeakerIll} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR SPEAKERS
                </div>
                <Bar />
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR PANELIST
                </div>
                <Bar />
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "10%" }}></div>
            </div>
        )
    }
}

export default Speaker