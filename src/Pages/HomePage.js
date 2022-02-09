import React from "react"
import Home from "../Assets/Home-illustration.png"

class HomePage extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ textAlign: "center", fontSize: "32px", color: "var(--blue-color)", fontWeight: "900" }}>
                        ENGAGING MINDS, <br />EMPOWERING THE FUTURE
                    </div>
                    <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                        COMING SOON
                    </div>
                </div>
                <div>
                    <img src={Home} style={{ width: "500px" }} />
                </div>
            </div>
        )
    }
}

export default HomePage