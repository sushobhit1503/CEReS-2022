import React from "react"
import Presentations from "../Assets/Presentation.png"
import SideCard from "../Components/SideCard"
import Bar from "../Components/Bar"

class Presentation extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }} >
                            PRESENTATION TAGLINE
                        </div>
                        <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                            COMING SOON
                        </div>
                        <button style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600", alignSelf: "center" }}>
                            REGISTER NOW
                        </button>
                    </div>
                    <div>
                        <img src={Presentations} style={{ width: "500px" }} alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR PRESENTATIONS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            PAPER PRESENTATION
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            DEMO PRESENTATION
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                </div>
            </div>
        )
    }
}

export default Presentation