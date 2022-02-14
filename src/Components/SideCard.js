import React from "react"

class SideCard extends React.Component {
    render() {
        return (
            <div className="side-card">
                {this.props.children}
            </div>
        )
    }
}

export default SideCard