import React from "react"
import Presentations from "../Assets/Presentation.png"
import SideCard from "../Components/SideCard"
import Bar from "../Components/Bar"

class Presentation extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading">
                            MASTERING YOUR SKILLS
                        </div>
                        <div className="land-description">
                            What better way to learn how to present research models and prototypes than by actually making some?
                            In our two day exhibition you can showcase your projects to our experienced speakers and
                            obtain valuable critique. Your work will be judged by an expert panel and the best stands shall
                            win exciting rewards!
                        </div>
                        <a href="https://easychair.org/cfp/CEReS2022" target="_blank" rel="noreferrer" style={{ textDecoration: "none", alignSelf: "center", marginTop: "20px" }}>
                            <button style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600" }}>
                                REGISTER NOW
                            </button>
                        </a>
                    </div>
                    <div>
                        <img src={Presentations} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR PRESENTATIONS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <SideCard>
                        <div className="topic-subheadings">
                            PAPER PRESENTATION
                        </div>
                        <div style={{ width: "95%" }}>
                            <ul>
                                <li>Gain insight and knowledge from professionals on your own presentation and paper</li>
                                <li>Present research papers and stand a chance to win exciting awards.</li>
                                <li>Submit papers on a wide range of topics like IoT, AI, ML, Cyber Security and Virtual Instrumentation</li>
                                <li>Entries accepted till 28th February, 2022. Hurry Up!</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div className="topic-subheadings">
                            DEMO PRESENTATION
                        </div>
                        <div style={{ width: "90%" }}>
                            <ul>
                                <li>Apart from papers, participants get to display their work through a demonstrative video or prototype.</li>
                                <li>By utilizing the visual medium, participants will get to fully showcase their models. </li>
                            </ul>
                        </div>
                    </SideCard>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
                    <div style={{ color: "var(--blue-color)", textAlign: "center", fontWeight: "600" }}>
                        <b>NOTE: </b>The format of submission is mentioned on the submission site
                    </div>
                    <a href="https://easychair.org/conferences/?conf=ceres2022" target="_blank" rel="noreferrer" style={{ textDecoration: "none", alignSelf: "center", marginLeft: "10px" }}>
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