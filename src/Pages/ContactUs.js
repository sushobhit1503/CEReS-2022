import React from "react"
import Contact from "../Assets/Contact.png"
import Bar from "../Components/Bar"
import BottomCard from "../Components/BottomCard"
import ACM from "../Assets/acm.png"
import IEEE from "../Assets/ieee.png"
import PHOENIX from "../Assets/phoenix.png"
import CSA from "../Assets/csa.png"
import { Input } from "reactstrap"
import emailjs from "@emailjs/browser"

class ContactUs extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            response: "Your query has been submitted. We will get back to you soon."
        }
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const sendEmail = (e) => {
            e.preventDefault()
            const { email, name, message } = this.state
            let templateParams = {
                from_name: name,
                to_name: "CEReS 2022",
                subject: "QUERY FROM CEReS 2022 Website",
                reply_to: email,
                message: message
            }
            emailjs.send('service_8qyy1jl', 'template_9j0g31m', templateParams, 'user_L3gJdR4R522WMBapKUxPi')
                .then(() => {
                    this.setState({ response: "Your query has been submitted. We will get back to you soon." })
                }, () => {
                    this.setState({ response: "Some error occurred. Please try again later" })
                })
            this.setState({ name: "", email: "", message: "" })
        }

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
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                <div style={{ marginTop: "100px" }}></div>
                <div className="topic-headings">
                    HAVE ANY QUERY?
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "80%", borderRadius: "10px", alignSelf: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input name="name" value={this.state.name} onChange={onChange} placeholder="FULL NAME" style={{ width: "47%" }} type="text" />
                        <Input name="email" value={this.state.email} onChange={onChange} placeholder="EMAIL ID" style={{ width: "47%" }} type="email" />
                    </div>
                    <div style={{ marginTop: "20px" }}></div>
                    <Input name="message" value={this.state.message} onChange={onChange} rows="8" placeholder="MESSAGE" type="textarea" />
                    <div style={{ marginTop: "10px" }}></div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ fontSize: "12px", textAlign: "center", color: "grey" }}>
                            {this.state.response}
                        </div>
                        <div style={{ marginTop: "10px" }}></div>
                        <button onClick={sendEmail} style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600", alignSelf: "center" }}>
                            SUBMIT QUERY
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs