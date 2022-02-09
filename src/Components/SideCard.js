import React from "react"

class SideCard extends React.Component {
    render() {
        return (
            <div style={{ borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", height: "300px", width: "550px", borderLeft: "10px solid var(--yellow-color)", margin: "20px" }}>
                {this.props.children}
            </div>
        )
    }
}

export default SideCard