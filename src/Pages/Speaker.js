import React from "react"
import SpeakerIll from "../Assets/Speaker.png"
import Bar from "../Components/Bar"
import SKP from "../Assets/SKP.jpg"
import pb from "../Assets/pb.jpg"
import DN from "../Assets/DN.JPG"
import AB from "../Assets/AB.jpg"
import PS from "../Assets/PS.jfif"
import NP from "../Assets/NP.JPG"
import DC from "../Assets/DC.jpg"
import UM from "../Assets/UM.png"
import BottomCard from "../Components/BottomCard"
import { Modal, ModalBody } from "reactstrap"

class Speaker extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            isOpen: false,
            description: ""
        }
    }
    render() {
        // const makeModal = (name, description, image) => {
        //     this.setState({ isOpen: !this.state.isOpen, name: name, description: description })
        // }
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading" >
                            SPEAKERS
                        </div>
                        <div className="land-description">
                            If you’ve ever wanted to gain a deeper perspective on the field of research, then look no further. As veterans in their fields, our line-up of speakers will be able to shine light on various topics and provide insightful counsel.
                            Wisdom begets wisdom, and at CEReS 2022, we are proud to be hosting some of the foremost minds in the sphere of research and academia.
                        </div>
                    </div>
                    <div>
                        <img src={SpeakerIll} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR CHIEF GUESTS
                </div>
                <Bar />
                <div className="change" style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center" }}>
                    <BottomCard height="425px" width="300px">
                        <img alt="ceres" src={SKP} className="speaker-picture" />
                        <div className="topic-subheadings">
                            PROF. SANKAR PAL
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Computer Scientist, Former Director Indian Statistical Institute, Kolkata
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                    <BottomCard height="425px" width="300px">
                        <img alt="ceres" src={pb} className="speaker-picture" />
                        <div style={{ fontSize: "20px" }} className="topic-subheadings">
                            PROF. PUSHPAK BHATTACHARYYA
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Professor at CSE Department, IIT Bombay, Former Director IIT Patna
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Pushpak Bhattacharyya", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR SPEAKERS
                </div>
                <Bar />
                <div className="change1" style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center" }}>
                    <BottomCard height="400px" width="275px">
                        <img alt="ceres" src={DN} className="speaker-picture" />
                        <div className="topic-subheadings">
                            MR. DIGBIJOY NATH
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Co Founder, AGNIT Semiconductors, Associate Professor IISc
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                    <BottomCard height="400px" width="275px">
                        <img alt="ceres" src={AB} className="speaker-picture" />
                        <div className="topic-subheadings">
                            DR. ANANT BHATT
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            CTO, Centre of excellence for artificial intelligence, Govt. of India
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                    <BottomCard height="400px" width="275px">
                        <img alt="ceres" src={NP} className="speaker-picture" />
                        <div style={{ fontSize: "23px" }} className="topic-subheadings">
                            MR. NISHITH PATHAK
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Microsoft regional director, author of AI books.
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                    <BottomCard height="400px" width="275px">
                        <img alt="ceres" src={PS} className="speaker-picture" />
                        <div style={{ fontSize: "20px" }} className="topic-subheadings">
                            DR. PARIKSHIT SAHATIYA
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Associate editor for nature scientific reports. Wearable Electronics expert
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                </div>
                <div style={{ marginTop: "10%" }}></div>
                <div className="topic-headings">
                    OUR PANELIST
                </div>
                <Bar />
                <div style={{ fontSize: "20px", fontWeight: "400" }} className="topic-subheadings">Panel Discussion on CyberSecurity</div>
                <div className="change1" style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center" }}>
                    <BottomCard height="425px" width="300px">
                        <img alt="ceres" src={DC} className="speaker-picture" />
                        <div style={{ fontSize: "20px" }} className="topic-subheadings">
                            DR. DAVE CHATTERJEE
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            Author of "CyberSecurity Readiness", Professor at University of Georgia
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                    <BottomCard height="425px" width="300px">
                        <img alt="ceres" src={UM} className="speaker-picture" />
                        <div style={{ fontSize: "20px" }} className="topic-subheadings">
                            MR. UTSAV MITTAL
                        </div>
                        <div style={{ fontWeight: "400" }}>
                            CEO, Founder of Xiarch, Founded ISSCC's Delhi Chapter
                        </div>
                        {/* <div style={{ cursor: "pointer" }} onClick={() => makeModal("Prof. Sankar Pal", "")}>
                            READ MORE
                        </div> */}
                    </BottomCard>
                </div>
                <div style={{ marginTop: "10%" }}></div>
                <Modal isOpen={this.state.isOpen} centered toggle={() => { this.setState({ isOpen: !this.state.isOpen }) }}>
                    <ModalBody>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="topic-subheadings">{this.state.name}</div>
                                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center" }}>
                                    {this.state.description}
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Speaker