import React from "react"
import SpeakerIll from "../Assets/Speaker.png"
import Bar from "../Components/Bar"

class Speaker extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }} >
                            SPEAKER TAGLINE
                        </div>
                        <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                            COMING SOON
                        </div>
                    </div>
                    <div>
                        <img src={SpeakerIll} style={{ width: "500px" }} alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR SPEAKERS
                </div>
                <Bar />
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR PANELIST
                </div>
                <Bar />
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "100px" }}></div>
            </div>
        )
    }
}

export default Speaker