import React from "react"
import Home from "../Assets/Home-illustration.png"
import Bar from "../Components/Bar"
import SideCard from "../Components/SideCard"
// import BottomCard from "../Components/BottomCard"
// import Logo from "../Assets/Logo.jpg"
import IoT from "../Assets/IoT.png"
import Cyber from "../Assets/Cyber.jpg"
import Ai from "../Assets/Ai.png"
import Digital from "../Assets/Digital.jpg"
import Wearable from "../Assets/Wear.jpg"
import Nano from "../Assets/Nano.jpg"
import Semi from "../Assets/Semi.jpg"
import Sensor from "../Assets/Sensor.png"
import Schedule from "../Components/Schedule.json"
import "./HomePage.css"
import ScheduleLine from "../Components/ScheduleLine"

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            day: 1
        }
    }
    render() {
        const changeDate1 = () => {
            this.setState({ day: 0 })
        }
        const changeDate2 = () => {
            this.setState({ day: 1 })
        }
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading">
                            ENGAGING MINDS, <br />EMPOWERING THE FUTURE
                        </div>
                        <div className="land-description">
                            In our two day Computing and Electronic Summit organized by BITS Pilani Hyderabad,
                            our aim is to promote and facilitate research in our society.
                            Come on board and learn the ABCs of Research with brilliant research speakers,
                            workshops, presentations and exciting competitions to nurture your skills and propel you to success!
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={Home} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "8%" }}></div>
                <div className="topic-headings">
                    OUR EVENTS
                </div>
                <Bar />
                <div style={{ margin: "3%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <SideCard>
                        <div className="topic-subheadings">
                            SPEAKER SESSIONS
                        </div>
                        <div className="side-card-content">
                            <ul>
                                <li>Esteemed Chief Guest to inaugurate the proceedings.</li>
                                <li>Three different keynote speakers, all coming from different research backgrounds. </li>
                                <li>Armed with expertise in various realms of study, this will be your opportunity to get an insider look at the domains of research you are most interested in.</li>
                            </ul>
                        </div>
                    </SideCard>

                    <SideCard>
                        <div className="topic-subheadings">
                            PANEL DISCUSSION
                        </div>
                        <div className="side-card-content" style={{ width: "90%" }}>
                            <ul>
                                <li>Witness an enlightening panel discussion</li>
                                <li>Know about the views of our panel experts.</li>
                                <li>Have an eye-opening experience like no other. </li>
                                <li>Topics of discussion are same as that of our main theme of the summit</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div className="topic-subheadings">
                            PRESENTATIONS
                        </div>
                        <div className="side-card-content" style={{ width: "95%" }}>
                            <ul>
                                <li>Get some first-hand involvement in the world of research. </li>
                                <li>Get the opportunity to present your own models and prototypes to the world.</li>
                                <li>Showcase your papers through presentations or prototype through demo videos.</li>
                                <li>The ones deemed best by our team of judges will be firmly in line for awards!</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div className="topic-subheadings">
                            WORKSHOPS
                        </div>
                        <div className="side-card-content" style={{ width: "95%" }}>
                            <ul>
                                <li>Get hands on experience from experts through our experts</li>
                                <li>Know about basics of research that will teach you the nitty-gritty terminology used in literature reviews, surveys and auditing</li>
                                <li>Make your journey smooth and sailing from here on out.</li>
                                <li>Learn about variety of simulation tools used in topics of our summit.</li>
                            </ul>
                        </div>
                    </SideCard>
                </div>
                <div style={{ marginTop: "8%" }}></div>
                <div className="topic-headings">
                    TOPICS
                </div>
                <Bar />
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={IoT} />
                        </div>
                        <div className="topic-text" >
                            INTERNET OF THINGS
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Wearable} />
                        </div>
                        <div className="topic-text" >
                            WEARABLE ELECTRONICS
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Cyber} />
                        </div>
                        <div className="topic-text" >
                            CYBER SECURITY
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Ai} />
                        </div>
                        <div className="topic-text" >
                            AI and ML
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Nano} />
                        </div>
                        <div className="topic-text" >
                            NANO ELECTRONICS
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Sensor} />
                        </div>
                        <div className="topic-text" >
                            SENSORS
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Semi} />
                        </div>
                        <div className="topic-text" >
                            SEMICONDUCTORS
                        </div>
                    </div>
                    <div className="topic-container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                        <div>
                            <img className="topic-image" alt="ceres" src={Digital} />
                        </div>
                        <div className="topic-text" >
                            VIRTUAL INSTRU.
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "8%" }}></div>
                <div className="topic-headings">
                    SCHEDULE
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "max-content", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", textAlign: "center", color: "var(--yellow-color)", fontWeight: "400" }}>
                    <div style={{ display: "flex" }}>
                        <div onClick={changeDate1} className={this.state.day === 0 ? `activeDate` : null} style={{ width: "50%", color: "var(--blue-color)", fontWeight: "600", cursor: "pointer" }}>DAY 1</div>
                        <div className={this.state.day === 1 ? "activeDate" : null} onClick={changeDate2} style={{ width: "50%", color: "var(--blue-color)", fontWeight: "600", cursor: "pointer" }}>DAY 2</div>
                        <div style={{ borderBottom: "1px solid #909090" }}></div>
                    </div>
                    <div>
                        {Schedule[this.state.day].map(each => {
                            return (
                                <ScheduleLine each={each} />
                            )
                        })}
                    </div>
                </div>

                <div style={{ marginTop: "8%" }}></div>
                {/* <div className="topic-headings">
                    OUR SPONSORS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <BottomCard height="300px" width="300px">
                        <img alt="ceres" src={Logo} className="spons-cards" />
                        <div className="topic-subheadings">
                            TITLE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard height="300px" width="300px">
                        <img alt="ceres" src={Logo} className="spons-cards" />
                        <div className="topic-subheadings">
                            ASSOCIATE SPONSOR
                        </div>
                    </BottomCard>
                    <BottomCard height="300px" width="300px">
                        <img alt="ceres" src={Logo} className="spons-cards" />
                        <div className="topic-subheadings">
                            PUBLISH SPONSOR
                        </div>
                    </BottomCard>
                </div> */}
            </div>
        )
    }
}

export default HomePage