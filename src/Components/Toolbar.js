import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../Assets/Logo.jpg"
import "./Toolbar.css"

class Toolbar extends React.Component {
    render() {
        return (
            <div style={{ height: "125px", display: "flex", justifyContent: "space-between" }}>
                <div>
                    <img src={Logo} style={{ height: "125px" }} />
                </div>
                {/* <div style={{ display: "flex", alignSelf: "center" }}>
                    <NavLink className="menu-contents ">
                        HOME
                    </NavLink>
                    <NavLink className="menu-contents">
                        PRESENTATION
                    </NavLink>
                    <NavLink className="menu-contents">
                        SPEAKERS
                    </NavLink>
                    <NavLink className="menu-contents">
                        WORKSHOP
                    </NavLink>
                    <NavLink className="menu-contents">
                        CONTACT US
                    </NavLink>
                </div> */}
            </div>
        )
    }
}

export default Toolbar