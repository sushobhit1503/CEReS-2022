import React from "react"
import Workshops from "../Assets/Workshop.png"
import SideCard from "../Components/SideCard"
import Bar from "../Components/Bar"

class Workshop extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading" >
                            HIT THE GROUND RUNNING
                        </div>
                        <div className="land-description">
                            You’re in the right place if you’re looking for an opportunity to connect with experts and your peers to explore different topics and expand your practical knowledge! Both of our workshops are designed to get you the most out of this summit with active collaboration, where you’ll spend a good part of your time putting your skills to use.
                        </div>
                        {/* <a href="https://easychair.org/cfp/CEReS2022" target="_blank" style={{ textDecoration: "none", alignSelf: "center", marginTop: "20px" }}>
                            <button disabled={true} style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600" }}>
                                REGISTERATION COMING SOON
                            </button>
                        </a> */}
                    </div>
                    <div>
                        <img src={Workshops} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR WORKSHOPS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <SideCard>
                        <div className="topic-subheadings">
                            WORKSHOP I
                        </div>
                        <div style={{ width: "95%" }}>
                            <ul>
                                <li>Go through the very basics of research. </li>
                                <li>Learn the jargon specific to technological research and expand your understanding of research papers.</li>
                                <li>Learn how to write a good literature review and critically analyze papers.</li>
                                <li>Learn how to conduct a proper audit study to attest to the credibility of a research paper</li>
                            </ul>
                        </div>
                    </SideCard>
                    <SideCard>
                        <div className="topic-subheadings">
                            WORKSHOP II
                        </div>
                        <div style={{ width: "90%" }}>
                            <ul>
                                <li>In this workshop you’ll get to dabble with different kinds of simulation tools. </li>
                                <li>Your active participation here will be invaluable and will bolster your prowess in the variety of topics covered in this summit. </li>
                            </ul>
                        </div>
                    </SideCard>
                </div>
            </div>
        )
    }
}

export default Workshop