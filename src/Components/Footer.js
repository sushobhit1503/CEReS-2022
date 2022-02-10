import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", backgroundColor: "var(--blue-color)", height: "250px", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "40%", margin: "10px" }}>
                        <div style={{ color: "white", fontWeight: "700", textAlign: "center" }}>
                            ABOUT CERES
                        </div>
                        <div style={{ textAlign: "center", color: "white" }}>
                            Consectetur adipiscing elit. Aliquam dolor tortor, rutrum vel nunc non, gravida vehicula ligula. Morbi elementum odio sit amet eros efficitur, vitae viverra nunc tincidunt. Donec rutrum lorem ut purus placerat iaculis. Nullam auctor dapibus est, eu varius sem vehicula quis. Praesent rhoncus cursus commodo.
                        </div>
                    </div>
                    <div style={{ height: "100px", border: "1px solid var(--yellow-color)" }}>

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "30%", margin: "10px" }} >
                        <div style={{ color: "white", fontWeight: "700", textAlign: "center" }}>
                            FOLLOW THE ORGANIZERS
                        </div>
                    </div>
                    <div style={{ height: "100px", border: "1px solid var(--yellow-color)" }}>

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "30%", margin: "10px" }} >
                        <div style={{ color: "white", fontWeight: "700", textAlign: "center" }}>
                            CONTACT US
                        </div>
                        <div style={{ textAlign: "center", color: "white" }}>
                            Consectetur adipiscing elit. Aliquam dolor tortor, rutrum vel nunc non, gravida vehicula ligula. Morbi elementum odio sit amet eros efficitur, vitae viverra nunc tincidunt. Donec rutrum lorem ut purus placerat iaculis. Nullam auctor dapibus est, eu varius sem vehicula quis. Praesent rhoncus cursus commodo.
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