import React from "react"

class BottomCard extends React.Component {
    render() {
        return (
            <div style={{ borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", height: `${this.props.height}`, width: `${this.props.width}`, borderBottom: "10px solid var(--yellow-color)", margin: "20px" }}>
                {this.props.children}
            </div>
        )
    }
}

export default BottomCard