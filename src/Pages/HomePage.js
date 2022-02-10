import React from "react"
import Home from "../Assets/Home-illustration.png"
import Bar from "../Components/Bar"
import SideCard from "../Components/SideCard"
import BottomCard from "../Components/BottomCard"
import Logo from "../Assets/Logo.jpg"
import IoT from "../Assets/IoT.png"
import Cyber from "../Assets/Cyber.jpg"
import Ai from "../Assets/Ai.png"
import Digital from "../Assets/Digital.jpg"

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
                            In our two day Computing and Electronic Summit organized by BITS Pilani Hyderabad,
                            our aim is to promote and facilitate research in our society.
                            Come on board and learn the ABCs of Research with brilliant research speakers,
                            workshops, presentations and exciting competitions to nurture your skills and propel you to success!
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
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img src={IoT} style={{ width: "250px", height: "175px", borderRadius: "12px" }} />
                        </div>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "15px", fontWeight: "600" }}>
                            INTERNET OF THINGS
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img src={Cyber} style={{ width: "250px", height: "175px", borderRadius: "12px" }} />
                        </div>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "15px", fontWeight: "600" }}>
                            CYBER SECURITY
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img src={Ai} style={{ width: "250px", height: "175px", borderRadius: "12px" }} />
                        </div>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "15px", fontWeight: "600" }}>
                            AI and ML
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img src={Digital} style={{ width: "250px", height: "175px", borderRadius: "12px" }} />
                        </div>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "15px", fontWeight: "600" }}>
                            VIRTUAL INSTRUMENTATION
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    SCHEDULE
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "80%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", textAlign: "center", color: "var(--yellow-color)", fontWeight: "400" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR SPONSORS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <BottomCard height="300px" width="300px">
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "800", color: "var(--blue-color)" }}>
                            TITLE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard height="300px" width="300px">
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "800", color: "var(--blue-color)" }}>
                            ASSOCIATE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard height="300px" width="300px">
                        <img src={Logo} style={{ width: "200px", height: "200px", alignItems: "center" }} />
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "800", color: "var(--blue-color)" }}>
                            PUBLISH SPONSOR
                        </div>
                    </BottomCard>
                </div>
            </div>
        )
    }
}

export default HomePage