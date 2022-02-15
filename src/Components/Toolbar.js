import React from "react"
import { Link } from "react-router-dom"
import Logo from "../Assets/Logo.jpg"
import "./Toolbar.css"

class Toolbar extends React.Component {
    render() {
        const changeColor = (id) => {
            document.getElementById("1").classList.remove("activeLine")
            document.getElementById("2").classList.remove("activeLine")
            document.getElementById("3").classList.remove("activeLine")
            document.getElementById("4").classList.remove("activeLine")
            document.getElementById("5").classList.remove("activeLine")
            document.getElementById(id).classList.add("activeLine")
        }
        return (
            <div className="toolbar-container">
                <div>
                    <img src={Logo} style={{ height: "110px" }} alt="ceres" />
                </div>
                <div style={{ display: "flex", alignSelf: "center" }}>
                    <Link onClick={() => changeColor(1)} id="1" to="/" className="menu-contents activeLine">HOME</Link>
                    <Link onClick={() => changeColor(2)} id="2" to="/speaker" className="menu-contents">SPEAKERS</Link>
                    <Link onClick={() => changeColor(3)} id="3" to="/presentation" className="menu-contents">PRESENTATION</Link>
                    <Link onClick={() => changeColor(4)} id="4" to="/workshop" className="menu-contents">WORKSHOP</Link>
                    <Link onClick={() => changeColor(5)} id="5" to="/contact" className="menu-contents">CONTACT US </Link>
                </div>
            </div>
        )
    }
}

export default Toolbar