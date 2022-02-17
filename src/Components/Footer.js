import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", backgroundColor: "var(--blue-color)", height: "max-content", flexDirection: "column" }}>
                <div className="footer-container">
                    <div className="footer-spacing">
                        <div className="footer-heading">
                            ABOUT CERES
                        </div>
                        <div className="footer-content" style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
                            CERes is a two day Computer and Electronics Research Summit organized by BITS Pilani Hyderabad
                            to spread awareness on research opportunities and brings experienced speakers and aspiring
                            enthusiasts together to network and expand their skills.
                        </div>
                    </div>
                    <div className="footer-line">
                        <div style={{ height: "100px", border: "0.3px solid var(--yellow-color)" }}>

                        </div>
                    </div>
                    <div className="footer-spacing">
                        <div className="footer-heading">

                        </div>
                    </div>
                    <div className="footer-line">
                        <div style={{ height: "100px", border: "0.1px solid var(--yellow-color)" }}>

                        </div>
                    </div>
                    <div className="footer-spacing">
                        <div className="footer-heading">
                            CONTACT US
                        </div>
                        <div className="footer-content" style={{ color: "white", marginTop: "20px" }}>
                            <a href="mailto: ceres@hyderabad.bits-pilani.ac.in" style={{ textDecoration: "none", color: "white" }}><b>EMAIL: </b>ceres@hyderabad.bits-pilani.ac.in</a>
                            <div style={{ marginTop: "20px" }}><b>VENUE: </b>BITS Pilani, Hyderabad Campus, Hyderabad 500078, Telangana</div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", color: "var(--yellow-color)" }}>
                    COPYRIGHT &copy; 2022. All Rights Reserved by CEReS
                </div>
            </div>
        )
    }
}

export default Footer