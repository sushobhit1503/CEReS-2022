import React from "react"

const Instructions = () => {
    return (
        <div style={{ paddingTop: "125px" }}>
            <div className="land-heading">
                INSTRUCTIONS FOR BUYING TICKETS
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ul>
                    <li>Please accept the terms and condition and click on "PROCEED"</li>
                    <li>Please select STATE as "TELANGANA" and Type as "EDUCATION INSTITUTE"</li>
                    <li>Please select the INSITITUTE NAME as "BITS PILANI HYDERABAD CAMPUS"</li>
                    <li>Select either "CEReS 2022 Summit Fees" or "CEReS 2022 Paper Presentation Fees" accordingly.</li>
                    <li>Pay accordingly and send the receipt to ceres@hyderabad.bits-pilani.ac.in</li>
                </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm" target="_blank" rel="noreferrer" style={{ textDecoration: "none", marginTop: "20px" }}>
                    <button style={{ cursor: "pointer", border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600" }}>
                        PROCEED
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Instructions