import React from "react"
import Contact from "../Assets/Contact.png"
import Bar from "../Components/Bar"
import BottomCard from "../Components/BottomCard"
import ACM from "../Assets/acm.png"
import IEEE from "../Assets/ieee.png"
import PHOENIX from "../Assets/phoenix.png"
import CSA from "../Assets/csa.png"
// import { Input } from "reactstrap"

class ContactUs extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading" >
                            KNOW ABOUT ORGANIZERS
                        </div>
                        <div className="land-description">
                            CEReS is a summit born out of joint collaboration and effort between four bodies on campus -
                            The ACM Student Chapter BITS Pilani Hyderabad,
                            CSA - the Computer Science Association, the IEEE Student Branch
                            BITS Pilani Hyderabad and PHoEnix - the Electronics Association.
                        </div>
                    </div>
                    <div>
                        <img src={Contact} className="land-picture" alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    OUR ORGANIZERS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <BottomCard width="25%" height="25%">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="ceres" src={ACM} className="organiser-picture" />
                        </div>
                        <div className="organiser-text">
                            ACM - BITS HYDERABAD
                        </div>
                    </BottomCard>
                    <BottomCard width="25%" height="25%">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="ceres" src={CSA} className="organiser-picture" />
                        </div>
                        <div className="organiser-text">
                            COMPUTER ASSOCIATION
                        </div>
                    </BottomCard>
                    <BottomCard width="25%" height="25%">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="ceres" src={IEEE} className="organiser-picture" />
                        </div>
                        <div className="organiser-text">
                            IEEE - BITS HYDERABAD
                        </div>
                    </BottomCard>
                    <BottomCard width="25%" height="25%">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="ceres" src={PHOENIX} className="organiser-picture" />
                        </div>
                        <div className="organiser-text">
                            ELECTRONICS ASSOCIATION
                        </div>
                    </BottomCard>
                </div>
                {/* <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    HAVE ANY QUERY?
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "80%", borderRadius: "10px", alignSelf: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input placeholder="FULL NAME" style={{ width: "47%" }} type="text" />
                        <Input placeholder="EMAIL ID" style={{ width: "47%" }} type="email" />
                    </div>
                    <div style={{ marginTop: "20px" }}></div>
                    <Input rows="8" placeholder="MESSAGE" type="textarea" />
                    <div style={{ marginTop: "20px" }}></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600", alignSelf: "center" }}>
                            SUBMIT QUERY
                        </button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default ContactUs