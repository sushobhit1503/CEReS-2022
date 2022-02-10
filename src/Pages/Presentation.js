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
                            MASTERING YOUR SKILLS
                        </div>
                        <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                            What better way to learn how to present research models and prototypes than by actually making some?
                            In our two day exhibition you can showcase your projects to our experienced speakers and
                            obtain valuable critique. Your work will be judged by an expert panel and the best stands shall
                            win exciting rewards!
                        </div>
                        <a href="https://easychair.org/cfp/CEReS2022" target="_blank" style={{ textDecoration: "none", alignSelf: "center", marginTop: "20px" }}>
                            <button style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600" }}>
                                REGISTER NOW
                            </button>
                        </a>
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
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
                    <div style={{ color: "var(--blue-color)", textAlign: "center", fontWeight: "600" }}>
                        <b>NOTE: </b>The format of submission is mentioned on the submission site
                    </div>
                    <a href="https://easychair.org/conferences/?conf=ceres2022" target="_blank" style={{ textDecoration: "none", alignSelf: "center", marginLeft: "10px" }}>
                        <button style={{ border: "none", outline: "none", backgroundColor: "var(--yellow-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600" }}>
                            SUBMIT HERE
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Presentation

// https://easychair.org/conferences/?conf=ceres2022