import React from 'react';
import Menu from "../Assets/Menu.png"
import Logo from "../Assets/Logo.jpg"
import { Link } from 'react-router-dom';
import "./Toolbar.css"

class hamburgerMenuPage extends React.Component {
    constructor() {
        super()
        this.state = {
            isToggle: false
        }
    }
    render() {
        const changeColor = (id) => {
            document.getElementById("1").classList.remove("activeLine")
            document.getElementById("2").classList.remove("activeLine")
            document.getElementById("3").classList.remove("activeLine")
            document.getElementById("4").classList.remove("activeLine")
            document.getElementById("5").classList.remove("activeLine")
            document.getElementById(id).classList.add("activeLine")
            this.setState({ isToggle: false })
        }
        var sideBar = null
        if (this.state.isToggle) {
            sideBar =
                <div className="menu-slide">
                    <Link onClick={() => changeColor(1)} id="1" to="/" className="slide-contents">HOME</Link>
                    <Link onClick={() => changeColor(2)} id="2" to="/speaker" className="slide-contents">SPEAKERS</Link>
                    <Link onClick={() => changeColor(3)} id="3" to="/presentation" className="slide-contents">PRESENTATION</Link>
                    <Link onClick={() => changeColor(4)} id="4" to="/workshop" className="slide-contents">WORKSHOP</Link>
                    <Link onClick={() => changeColor(5)} id="5" to="/contact" className="slide-contents">CONTACT US </Link>
                </div>
        }
        return (
            <div className="menu-presence">
                <div id="30" className="menubar-container">
                    <div>
                        <img src={Logo} style={{ height: "110px" }} alt="ceres" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img onClick={() => { this.setState({ isToggle: !this.state.isToggle }) }} src={Menu} style={{ width: "60px", height: "60px", cursor: "pointer" }} alt="ceres" />
                    </div>
                </div>
                {sideBar}
            </div>
        );
    }
}

export default hamburgerMenuPage;