import React from "react"
import { Input, Label } from "reactstrap"
import Bar from "../Components/Bar"

class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            id: "",
            category: "",
            price: 0,
            filled: false
        }
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const ticketPrice = (event, price) => {
            this.setState({ price: price, category: event })
        }
        var disabled = !(this.state.email && this.state.price && this.state.name)

        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div className="land-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="land-heading" >
                            REGISTER FOR THE SUMMIT
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Bar />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
                            <div className="topic-subheadings" style={{ textAlign: "start" }}>PAPER PRESENTATION FEE</div>
                            <div style={{ display: "flex" }}>
                                <div className="land-description" style={{ fontSize: "12px", textAlign: "start" }}>
                                    CEReS is a two day research summit with eminent speakers who will give insight
                                    into their field, workshops, competitions and exhibitions.
                                    You will receive access to CEReS paper presentation and all
                                    other events of CEReS. Above all, there is a special discount for
                                    members of IEEE and ACM and students of BITS Pilani Hyderabad Campus!
                                </div>
                                <div>
                                    <button onClick={() => ticketPrice("Paper Presentation", 249)} style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "5px", width: "100px", borderRadius: "10px", color: "white", fontWeight: "600", marginLeft: "40px", alignSelf: "center" }}>
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
                            <div className="topic-subheadings" style={{ textAlign: "start" }}>RESEARCH SUMMIT FEE</div>
                            <div style={{ display: "flex" }}>
                                <div className="land-description" style={{ fontSize: "12px", textAlign: "start" }}>
                                    CEReS is a two day research summit with eminent speakers who will give insight
                                    into their field, workshops, competitions and exhibitions.
                                    You will receive access to CEReS paper presentation and all
                                    other events of CEReS. Above all, there is a special discount for
                                    members of IEEE and ACM and students of BITS Pilani Hyderabad Campus!
                                </div>
                                <div>
                                    <button onClick={() => ticketPrice("Research Summit", 149)} style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "5px", width: "100px", borderRadius: "10px", color: "white", fontWeight: "600", marginLeft: "40px", alignSelf: "center" }}>
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "10px 0px 30px 0px", padding: "10px", width: "30%", borderRadius: "10px" }}>
                        <div className="topic-subheadings" style={{ fontSize: "20px", marginBottom: "10px" }}>TICKET DETAILS</div>
                        <Input onChange={onChange} placeholder="Name" value={this.state.name} name="name" type="text" style={{ marginBottom: "15px" }} />
                        <Input onChange={onChange} placeholder="Email id" value={this.state.email} name="email" type="email" style={{ marginBottom: "15px" }} />
                        <Input onChange={onChange} value={this.state.category} name="category" type="text" disabled={true} style={{ marginBottom: "15px" }} placeholder="Choose category from left" />
                        <Label className="topic-subheadings" style={{ fontSize: "15px", textAlign: "start", fontWeight: "500" }} >Member of ACM/IEEE?</Label>
                        <Input onChange={onChange} placeholder="ACM/IEEE id" value={this.state.id} name="id" type="text" style={{ marginBottom: "60px" }} />
                        <div style={{ border: "0.1px solid rgba(0,0,0,0.3)" }}>
                        </div>
                        <div className="topic-subheadings" style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "600", textAlign: "end" }}>Total: Rs. {this.state.price}</div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                    {!disabled ? <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_J4BRAPsdiTMoEF" async> </script> </form> :
                        <button disabled={true} style={{ border: "none", outline: "none", backgroundColor: "#555555", padding: "15px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600", alignItems: "center" }}>
                            FILL THE DETAILS
                        </button>}

                </div>
            </div>
        )
    }
}

export default Ticket
