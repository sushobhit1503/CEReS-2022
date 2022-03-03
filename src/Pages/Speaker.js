import React from "react"
import SpeakerIll from "../Assets/Speaker.png"
import Bar from "../Components/Bar"
import SKP from "../Assets/SKP.jpg"
import pb from "../Assets/pb.jpg"
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
                            SPEAKER TAGLINE
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
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center" }}>
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
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
                </div>
                <div style={{ marginTop: "10%" }}></div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR PANELIST
                </div>
                <Bar />
                <div style={{ color: "var(--yellow-color)", textAlign: "center", fontWeight: "600" }}>
                    TO BE ANNOUNCED SOON
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