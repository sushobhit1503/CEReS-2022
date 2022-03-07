import React from "react"
import Successs from "../Assets/Confirm.png"

class Success extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "130px" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                    <img src={Successs} alt="CERES" style={{ width: "300px" }} />
                </div>
                <h4 style={{ textAlign: "center", color: "var(--blue-color)", fontWeight: "800", marginBottom: "10px" }}> YOUR PAYMENT IS SUCCESSFUL. YOU WILL RECEIVE THE TICKETS SOON ON EMAIL</h4>
                <h6 style={{ textAlign: "center", marginBottom: "50px" }}>GO TO <a href="/"> HOME PAGE</a></h6>
            </div>
        )
    }
}

export default Success
