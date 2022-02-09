import React from "react"
import Home from "../Assets/Home-illustration.png"
import Bar from "../Components/Bar"
import SideCard from "../Components/SideCard"
import BottomCard from "../Components/BottomCard"
import Logo from "../Assets/Logo.jpg"

class HomePage extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }} >
                            ENGAGING MINDS, <br />EMPOWERING THE FUTURE
                        </div>
                        <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                            COMING SOON
                        </div>
                    </div>
                    <div>
                        <img src={Home} style={{ width: "500px" }} alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR EVENTS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            SPEAKER SESSIONS
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            PRESENTATIONS
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            WORKSHOPS
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            NETWORKING
                        </div>
                        <div>
                            <ul>
                                <li>Lorem Ipsem</li>
                            </ul>
                        </div>
                    </SideCard>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    TOPICS
                </div>
                <Bar />
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    SCHEDULE
                </div>
                <Bar />
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR SPONSORS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <BottomCard>
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            TITLE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard>
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            ASSOCIATE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard>
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", color: "var(--blue-color)" }}>
                            PUBLISH SPONSOR
                        </div>
                    </BottomCard>
                </div>
            </div>
        )
    }
}

export default HomePage