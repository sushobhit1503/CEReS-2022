import React from "react"

const ScheduleLine = (props) => {
    return (
        <div style={{ display: "flex", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "10px", padding: "5px 10px 5px 10px", borderRadius: "10px", height: "75px" }}>
            <div style={{ display: "flex", alignItems: "center", color: "var(--blue-color)", fontSize: "20px", fontWeight: "900", borderRight: "0.3px solid rgba(0,0,0,0.1)", paddingRight: "5px" }}>
                {props.each.time}
            </div>
            <div style={{ display: "flex", marginLeft: "10px", justifyContent: "center", justifySelf: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", color: "var(--yellow-color)", fontSize: "20px", fontWeight: "900" }} >
                    {props.each.name}
                </div>
                <div style={{ color: "var(--blue-color)", fontWeight: "500", display: "flex" }}>
                    {props.each.speaker}
                </div>
            </div>
        </div >
    )
}

export default ScheduleLine